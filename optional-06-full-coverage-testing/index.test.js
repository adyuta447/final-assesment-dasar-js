import test from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("should return the sum of two numbers", () => {
  assert.strictEqual(sum(2, 3), 5);
});

test("should return the sum of negative numbers", () => {
  assert.strictEqual(sum(-2, -3), -5);
});

test("should return the sum of a positive and a negative number", () => {
  assert.strictEqual(sum(5, -3), 2);
});

test("should return the sum of zero and a number", () => {
  assert.strictEqual(sum(0, 5), 5);
});

test("should return the sum of two zeros", () => {
  assert.strictEqual(sum(0, 0), 0);
});

test("should return 0 if either argument is not a number", () => {
  assert.strictEqual(sum("a", 5), 0);
  assert.strictEqual(sum(5, "b"), 0);
  assert.strictEqual(sum("a", "b"), 0);
});

test("should return 0 if either argument is a negative number", () => {
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(5, -1), 0);
  assert.strictEqual(sum(-1, -1), 0);
});
