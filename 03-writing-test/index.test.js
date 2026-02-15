import test from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('sum function should return the correct sum of two numbers', () => {
    const result = sum(2, 3);
    assert.strictEqual(result, 5, 'Expected sum(2, 3) to equal 5');
});

test('sum function should return the correct sum of negative numbers', () => {
    const result = sum(-2, -3);
    assert.strictEqual(result, -5, 'Expected sum(-2, -3) to equal -5');
});

test('sum function should return the correct sum of a positive and a negative number', () => {
    const result = sum(5, -3);
    assert.strictEqual(result, 2, 'Expected sum(5, -3) to equal 2');
});

test('sum function should return the correct sum of zero and a number', () => {
    const result = sum(0, 5);
    assert.strictEqual(result, 5, 'Expected sum(0, 5) to equal 5');
});

test('sum function should return the correct sum of two zeros', () => {
    const result = sum(0, 0);
    assert.strictEqual(result, 0, 'Expected sum(0, 0) to equal 0');
});
