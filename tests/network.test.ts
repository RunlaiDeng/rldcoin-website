import test from "node:test";
import assert from "node:assert/strict";
import { networkHealth, parseNetworkStatus } from "../src/lib/network";
import { MANIFEST, ZONE } from "../src/lib/site";

const now = Date.parse("2026-09-22T09:00:00Z");
const fixture = {
  state: "RUNNING",
  height: 15,
  observed_at: "2026-09-22T08:59:50Z",
  last_full_verification_at: "2026-09-22T08:55:00Z",
  heartbeat_interval_seconds: 600,
  control_group_count: 1,
  manifest_sha256: MANIFEST,
  operations_revision: 2,
  profile: "P1_REMOTE_ZERO_VALUE_V1",
  reward_issuance_enabled: false,
  software_key_expires_at: "2026-10-07T16:00:00Z",
  state_root: "a".repeat(64),
  value_cap: "VALUE_CAP_0",
  zone_id: ZONE,
};
test("accepts the pinned public identity and strips unrecognized fields", () => {
  const parsed = parseNetworkStatus(
    { ...fixture, unexpected: "do not forward" },
    now,
  );
  assert.deepEqual(parsed, fixture);
  assert.equal(networkHealth(parsed, now), "running");
});
test("does not identify another network or invalid metrics as the Earth network", () => {
  for (const change of [
    { zone_id: "another-zone" },
    { manifest_sha256: "b".repeat(64) },
    { height: -1 },
    { height: 1.5 },
    { height: Number.MAX_SAFE_INTEGER + 1 },
    { reward_issuance_enabled: "false" },
    { state_root: "invalid" },
    { observed_at: "invalid" },
    { observed_at: "2026-09-22T09:02:00Z" },
    { last_full_verification_at: "2026-09-22T09:02:00Z" },
    { heartbeat_interval_seconds: 0 },
    { height: null },
    { state_root: undefined },
    { last_full_verification_at: null },
  ]) {
    assert.throws(() => parseNetworkStatus({ ...fixture, ...change }, now));
  }
});
test("a stopped feed may omit unavailable ledger fields without inventing zero values", () => {
  const stopped = parseNetworkStatus(
    {
      ...fixture,
      state: "STOPPED",
      height: undefined,
      state_root: undefined,
      last_full_verification_at: null,
    },
    now,
  );
  assert.equal(stopped.height, null);
  assert.equal(stopped.state_root, null);
  assert.equal(stopped.last_full_verification_at, null);
  assert.equal(networkHealth(stopped, now), "stopped");
  assert.equal(networkHealth(stopped, now + 180_000), "stale");
  assert.throws(() => parseNetworkStatus({ ...stopped, height: -1 }, now));
});
test("fresh operator telemetry does not hide a stopped heartbeat or stale full verification", () => {
  assert.equal(networkHealth({ ...fixture, state: "STOPPED" }, now), "stopped");
  assert.equal(
    networkHealth(
      { ...fixture, last_full_verification_at: "2026-09-22T08:30:00Z" },
      now,
    ),
    "stale",
  );
  assert.equal(
    networkHealth({ ...fixture, observed_at: "2026-09-22T08:55:00Z" }, now),
    "stale",
  );
});
test("software authorization expiry takes precedence over a running flag", () => {
  assert.equal(
    networkHealth(fixture, Date.parse(fixture.software_key_expires_at)),
    "expired",
  );
});

test("continuing authorization requires an explicit mode, revision and record digest", () => {
  const continuing = {
    ...fixture,
    operations_revision: 5,
    software_key_expires_at: null,
    key_authorization_mode: "UNTIL_REVOKED",
    operations_authorization_sha256: "c".repeat(64),
  };
  const parsed = parseNetworkStatus(continuing, now);
  assert.equal(networkHealth(parsed, now), "running");
  assert.equal(
    networkHealth({ ...parsed, state: "AUTHORIZATION_REVOKED" }, now),
    "stopped",
  );
  for (const change of [
    { key_authorization_mode: undefined },
    { key_authorization_mode: "unlimited" },
    { software_key_expires_at: undefined },
    { software_key_expires_at: fixture.software_key_expires_at },
    { operations_revision: 4 },
    { operations_authorization_sha256: undefined },
    { operations_authorization_sha256: "invalid" },
  ])
    assert.throws(() => parseNetworkStatus({ ...continuing, ...change }, now));
  assert.throws(() =>
    parseNetworkStatus({ ...fixture, software_key_expires_at: null }, now),
  );
  assert.equal(networkHealth(parsed, now + 180_000), "stale");
});
