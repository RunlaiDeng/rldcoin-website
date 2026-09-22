import { MANIFEST, ZONE } from "./site";

export type NetworkStatus = {
  state: string;
  height: number;
  observed_at: string;
  last_full_verification_at: string;
  heartbeat_interval_seconds: number;
  control_group_count: number;
  manifest_sha256: string;
  operations_revision: number;
  profile: string;
  reward_issuance_enabled: boolean;
  software_key_expires_at: string;
  state_root: string;
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
  if (
    v.zone_id !== ZONE ||
    v.manifest_sha256 !== MANIFEST ||
    !integer(v.height) ||
    !integer(v.operations_revision, 1) ||
    !integer(v.control_group_count, 1) ||
    !integer(v.heartbeat_interval_seconds, 1) ||
    v.heartbeat_interval_seconds > 86400 ||
    !isoDate(v.observed_at) ||
    !isoDate(v.last_full_verification_at) ||
    !isoDate(v.software_key_expires_at) ||
    Date.parse(v.observed_at) > now + 60_000 ||
    Date.parse(v.last_full_verification_at) >
      Date.parse(v.observed_at) + 60_000 ||
    !text(v.state) ||
    !text(v.profile) ||
    !text(v.value_cap) ||
    typeof v.reward_issuance_enabled !== "boolean" ||
    typeof v.state_root !== "string" ||
    !/^[a-f0-9]{64}$/.test(v.state_root)
  )
    throw new Error("Unrecognized or invalid network response");
  // Explicitly project public fields. Never forward unrecognized upstream data.
  return {
    state: v.state,
    height: v.height,
    observed_at: v.observed_at,
    last_full_verification_at: v.last_full_verification_at,
    heartbeat_interval_seconds: v.heartbeat_interval_seconds,
    control_group_count: v.control_group_count,
    manifest_sha256: v.manifest_sha256,
    operations_revision: v.operations_revision,
    profile: v.profile,
    reward_issuance_enabled: v.reward_issuance_enabled,
    software_key_expires_at: v.software_key_expires_at,
    state_root: v.state_root,
    value_cap: v.value_cap,
    zone_id: v.zone_id,
  } as NetworkStatus;
}
export function networkHealth(
  data: NetworkStatus,
  now = Date.now(),
): "running" | "stale" | "expired" | "stopped" {
  if (now >= Date.parse(data.software_key_expires_at)) return "expired";
  if (
    now - Date.parse(data.observed_at) > 120_000 ||
    now - Date.parse(data.last_full_verification_at) >
      (2 * data.heartbeat_interval_seconds + 120) * 1000
  )
    return "stale";
  return data.state === "RUNNING" ? "running" : "stopped";
}
