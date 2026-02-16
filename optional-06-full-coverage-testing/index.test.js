import test from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("should return sum of two positive numbers", () => {
  assert.strictEqual(sum(2, 3), 5);
});

test("should return sum when one value is zero", () => {
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
});

test("should return 0 when both values are zero", () => {
  assert.strictEqual(sum(0, 0), 0);
});

test("should return 0 if first argument is not a number", () => {
  assert.strictEqual(sum("a", 5), 0);
});

test("should return 0 if second argument is not a number", () => {
  assert.strictEqual(sum(5, "b"), 0);
});

test("should return 0 if both arguments are not numbers", () => {
  assert.strictEqual(sum("a", "b"), 0);
});

test("should return 0 if first argument is negative", () => {
  assert.strictEqual(sum(-1, 5), 0);
});

test("should return 0 if second argument is negative", () => {
  assert.strictEqual(sum(5, -1), 0);
});

test("should return 0 if both arguments are negative", () => {
  assert.strictEqual(sum(-1, -1), 0);
});
