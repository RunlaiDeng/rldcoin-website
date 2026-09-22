import { MANIFEST, ZONE } from "./site";

export type NetworkStatus = {
  state: string;
  height: number | null;
  observed_at: string;
  last_full_verification_at: string | null;
  heartbeat_interval_seconds: number;
  control_group_count: number;
  manifest_sha256: string;
  operations_revision: number;
  profile: string;
  reward_issuance_enabled: boolean;
  software_key_expires_at: string | null;
  key_authorization_mode?: "UNTIL_REVOKED";
  operations_authorization_sha256?: string;
  state_root: string | null;
  value_cap: string;
  zone_id: string;
};
const isoDate = (value: unknown): value is string =>
  typeof value === "string" &&
  /^\d{4}-\d{2}-\d{2}T/.test(value) &&
  Number.isFinite(Date.parse(value));
const integer = (value: unknown, min = 0): value is number =>
  typeof value === "number" && Number.isSafeInteger(value) && value >= min;
const text = (value: unknown): value is string =>
  typeof value === "string" && value.length > 0 && value.length <= 128;

export function parseNetworkStatus(
  input: unknown,
  now = Date.now(),
): NetworkStatus {
  if (!input || typeof input !== "object")
    throw new Error("Invalid network response");
  const v = input as Record<string, unknown>;
  const continuing = v.key_authorization_mode === "UNTIL_REVOKED";
  const authorizationValid = continuing
    ? v.software_key_expires_at === null &&
      integer(v.operations_revision, 5) &&
      typeof v.operations_authorization_sha256 === "string" &&
      /^[a-f0-9]{64}$/.test(v.operations_authorization_sha256)
    : v.key_authorization_mode === undefined &&
      isoDate(v.software_key_expires_at);
  if (
    v.zone_id !== ZONE ||
    v.manifest_sha256 !== MANIFEST ||
    (v.height != null && !integer(v.height)) ||
    !integer(v.operations_revision, 1) ||
    !integer(v.control_group_count, 1) ||
    !integer(v.heartbeat_interval_seconds, 1) ||
    v.heartbeat_interval_seconds > 86400 ||
    !isoDate(v.observed_at) ||
    (v.last_full_verification_at != null &&
      !isoDate(v.last_full_verification_at)) ||
    !authorizationValid ||
    Date.parse(v.observed_at) > now + 60_000 ||
    (typeof v.last_full_verification_at === "string" &&
      Date.parse(v.last_full_verification_at) >
        Date.parse(v.observed_at) + 60_000) ||
    !text(v.state) ||
    !text(v.profile) ||
    !text(v.value_cap) ||
    typeof v.reward_issuance_enabled !== "boolean" ||
    (v.state_root != null &&
      (typeof v.state_root !== "string" ||
        !/^[a-f0-9]{64}$/.test(v.state_root))) ||
    (v.state === "RUNNING" &&
      (v.height == null ||
        v.last_full_verification_at == null ||
        v.state_root == null))
  )
    throw new Error("Unrecognized or invalid network response");
  // Explicitly project public fields. Never forward unrecognized upstream data.
  return {
    state: v.state,
    height: v.height ?? null,
    observed_at: v.observed_at,
    last_full_verification_at: v.last_full_verification_at ?? null,
    heartbeat_interval_seconds: v.heartbeat_interval_seconds,
    control_group_count: v.control_group_count,
    manifest_sha256: v.manifest_sha256,
    operations_revision: v.operations_revision,
    profile: v.profile,
    reward_issuance_enabled: v.reward_issuance_enabled,
    software_key_expires_at: v.software_key_expires_at,
    ...(continuing
      ? {
          key_authorization_mode: "UNTIL_REVOKED",
          operations_authorization_sha256: v.operations_authorization_sha256,
        }
      : {}),
    state_root: v.state_root ?? null,
    value_cap: v.value_cap,
    zone_id: v.zone_id,
  } as NetworkStatus;
}
export function networkHealth(
  data: NetworkStatus,
  now = Date.now(),
): "running" | "stale" | "expired" | "stopped" {
  if (
    data.software_key_expires_at !== null &&
    now >= Date.parse(data.software_key_expires_at)
  )
    return "expired";
  if (now - Date.parse(data.observed_at) > 120_000) return "stale";
  if (data.state !== "RUNNING") return "stopped";
  if (
    !data.last_full_verification_at ||
    now - Date.parse(data.last_full_verification_at) >
      (2 * data.heartbeat_interval_seconds + 120) * 1000
  )
    return "stale";
  return "running";
}
