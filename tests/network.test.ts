import test from "node:test";
import assert from "node:assert/strict";
import {
  networkHealth,
  parseNetworkStatus,
  formatRld,
} from "../src/lib/network";
import { MANIFEST, ZONE, POW_ADOPTION, POW_CHAIN } from "../src/lib/site";
const now = 1790070000000;
const fixture = {
  protocol: "RLD_REGIONAL_POW_V1",
  zone_id: ZONE,
  manifest_sha256: MANIFEST,
  adoption_id: POW_ADOPTION,
  chain_id: POW_CHAIN,
  height: "28",
  legacy_height: "27",
  tip: "a".repeat(64),
  chainwork: "b".repeat(64),
  state_root: "c".repeat(64),
  emitted_runlai: (250000n * 10n ** 24n).toString(),
  unissued_runlai: (10n ** 35n - 250000n * 10n ** 24n).toString(),
  mining: true,
  miner_enabled: true,
  hashes_this_run: "9007199254740993",
  average_hashes_per_second: 1000000,
  last_hash_at_unix: now / 1000 - 2,
  storage_healthy: true,
  block_capacity_available: true,
  observed_at_unix: now / 1000,
  cross_region_transfers_enabled: false,
};
test("pins the explicit rule adoption and projects only public fields", () => {
  const v = parseNetworkStatus({ ...fixture, secret: "never forward" }, now);
  assert.deepEqual(v, fixture);
  assert.equal(networkHealth(v, now), "running");
});
test("rejects other networks, false mining, invalid values and broken supply", () => {
  for (const change of [
    { adoption_id: "a".repeat(64) },
    { chain_id: "a".repeat(64) },
    { manifest_sha256: "a".repeat(64) },
    { zone_id: "other" },
    { height: 28 },
    { height: "028" },
    { height: "26" },
    { height: (1n << 128n).toString() },
    { emitted_runlai: "1" },
    { state_root: "wrong" },
    { hashes_this_run: "0" },
    { miner_enabled: false },
    { storage_healthy: false },
    { block_capacity_available: false },
    { observed_at_unix: now / 1000 + 61 },
    { last_hash_at_unix: now / 1000 + 1 },
    { last_hash_at_unix: now / 1000 - 31 },
    { cross_region_transfers_enabled: true },
    { average_hashes_per_second: -1 },
  ])
    assert.throws(() => parseNetworkStatus({ ...fixture, ...change }, now));
});
test("requires fresh telemetry and hashing, without treating slow block discovery as failure", () => {
  const v = parseNetworkStatus(fixture, now);
  assert.equal(networkHealth(v, now + 120001), "stale");
  assert.equal(networkHealth({ ...v, mining: false }, now), "stopped");
  assert.equal(networkHealth({ ...v, storage_healthy: false }, now), "stopped");
  assert.equal(
    networkHealth({ ...v, last_hash_at_unix: now / 1000 - 121 }, now),
    "stale",
  );
  assert.equal(networkHealth(v, now), "running");
});
test("preserves large exact amounts and displays the smallest unit", () => {
  assert.equal(formatRld("1"), "0.000000000000000000000001");
  assert.equal(formatRld(fixture.emitted_runlai), "250,000");
  assert.equal(formatRld((10n ** 35n).toString()), "100,000,000,000");
  const v = parseNetworkStatus({ ...fixture, height: "9007199254740993" }, now);
  assert.equal(v.height, "9007199254740993");
});
