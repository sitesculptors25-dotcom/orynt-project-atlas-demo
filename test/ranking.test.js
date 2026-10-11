import test from "node:test";
import assert from "node:assert/strict";
import { rankProjects } from "../src/index.js";

test("ranks stronger recent community signals first", () => {
  const ranked = rankProjects([
    { name: "Fresh", votes: 8, saves: 5, updatedAt: new Date().toISOString() },
    { name: "Old", votes: 8, saves: 0, updatedAt: "2020-01-01T00:00:00Z" }
  ]);
  assert.equal(ranked[0].name, "Fresh");
  assert.ok(ranked[0].score > ranked[1].score);
});
