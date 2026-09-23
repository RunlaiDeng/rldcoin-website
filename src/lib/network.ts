import { MANIFEST, ZONE, POW_ADOPTION, POW_CHAIN } from "./site";

export type NetworkStatus = {
  protocol: "RLD_REGIONAL_POW_V1";
  zone_id: string;
  manifest_sha256: string;
  adoption_id: string;
  chain_id: string;
  height: string;
  legacy_height: string;
  tip: string;
  chainwork: string;
  state_root: string;
  emitted_runlai: string;
  unissued_runlai: string;
  mining: boolean;
  miner_enabled: boolean;
  hashes_this_run: string;
  average_hashes_per_second: number;
  last_hash_at_unix: number;
  storage_healthy: boolean;
  block_capacity_available: boolean;
  observed_at_unix: number;
  cross_region_transfers_enabled: false;
};
const integer = (v: unknown): v is number =>
  typeof v === "number" && Number.isSafeInteger(v) && v >= 0;
const decimal = (v: unknown): v is string =>
  typeof v === "string" &&
  /^(0|[1-9][0-9]{0,38})$/.test(v) &&
  BigInt(v) < 1n << 128n;
const hash = (v: unknown): v is string =>
  typeof v === "string" && /^[0-9a-f]{64}$/.test(v);
const supply = 10n ** 35n;
export function parseNetworkStatus(
  input: unknown,
  now = Date.now(),
): NetworkStatus {
  if (!input || typeof input !== "object")
    throw new Error("Invalid network response");
  const v = input as Record<string, unknown>;
  if (
    v.protocol !== "RLD_REGIONAL_POW_V1" ||
    v.zone_id !== ZONE ||
    v.manifest_sha256 !== MANIFEST ||
    v.adoption_id !== POW_ADOPTION ||
    v.chain_id !== POW_CHAIN ||
    !decimal(v.height) ||
    !decimal(v.legacy_height) ||
    BigInt(v.height) < BigInt(v.legacy_height) ||
    !hash(v.tip) ||
    !hash(v.chainwork) ||
    !hash(v.state_root) ||
    !decimal(v.emitted_runlai) ||
    !decimal(v.unissued_runlai) ||
    BigInt(v.emitted_runlai) + BigInt(v.unissued_runlai) !== supply ||
    typeof v.mining !== "boolean" ||
    typeof v.miner_enabled !== "boolean" ||
    !decimal(v.hashes_this_run) ||
    !integer(v.average_hashes_per_second) ||
    !integer(v.observed_at_unix) ||
    v.observed_at_unix * 1000 > now + 60_000 ||
    !integer(v.last_hash_at_unix) ||
    v.last_hash_at_unix > v.observed_at_unix ||
    typeof v.storage_healthy !== "boolean" ||
    typeof v.block_capacity_available !== "boolean" ||
    v.cross_region_transfers_enabled !== false ||
    (v.mining &&
      (!v.miner_enabled ||
        !v.storage_healthy ||
        !v.block_capacity_available ||
        v.hashes_this_run === "0" ||
        v.observed_at_unix - v.last_hash_at_unix > 30))
  ) {
    throw new Error("Unrecognized or inconsistent PoW network response");
  }
  return {
    protocol: v.protocol,
    zone_id: v.zone_id,
    manifest_sha256: v.manifest_sha256,
    adoption_id: v.adoption_id,
    chain_id: v.chain_id,
    height: v.height,
    legacy_height: v.legacy_height,
    tip: v.tip,
    chainwork: v.chainwork,
    state_root: v.state_root,
    emitted_runlai: v.emitted_runlai,
    unissued_runlai: v.unissued_runlai,
    mining: v.mining,
    miner_enabled: v.miner_enabled,
    hashes_this_run: v.hashes_this_run,
    average_hashes_per_second: v.average_hashes_per_second,
    last_hash_at_unix: v.last_hash_at_unix,
    storage_healthy: v.storage_healthy,
    block_capacity_available: v.block_capacity_available,
    observed_at_unix: v.observed_at_unix,
    cross_region_transfers_enabled: false,
  } as NetworkStatus;
}
export function networkHealth(
  data: NetworkStatus,
  now = Date.now(),
): "running" | "stale" | "stopped" {
  if (now - data.observed_at_unix * 1000 > 120_000) return "stale";
  if (!data.storage_healthy || !data.block_capacity_available || !data.mining)
    return "stopped";
  if (now - data.last_hash_at_unix * 1000 > 120_000) return "stale";
  return "running";
}
export function formatRld(runlai: string): string {
  const value = BigInt(runlai),
    unit = 10n ** 24n;
  const whole = (value / unit).toLocaleString("en-US");
  const remainder = (value % unit)
    .toString()
    .padStart(24, "0")
    .replace(/0+$/, "");
  return remainder ? `${whole}.${remainder}` : whole;
}
