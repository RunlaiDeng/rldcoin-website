import test from "node:test";
import assert from "node:assert/strict";
import { formatRld } from "../src/lib/network";
test("preserves exact RLD unit formatting", () => {
  assert.equal(formatRld("1"), "0.000000000000000000000001");
  assert.equal(formatRld((10n ** 35n).toString()), "100,000,000,000");
});
