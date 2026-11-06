import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('buckets by key', () => {
  assert.deepEqual(
    [...api.bucketBy([1, 2, 3, 4], (x) => x % 2)],
    [
      [1, [1, 3]],
      [0, [2, 4]],
    ],
  );
});
test('preserves bucket order', () => {
  assert.deepEqual(api.bucketBy(['aa', 'ab', 'ba'], (x) => x[0]).get('a'), ['aa', 'ab']);
});
test('returns empty map', () => {
  assert.equal(api.bucketBy([], (x) => x).size, 0);
});
test('supports object key', () => {
  const key = {};
  assert.deepEqual(api.bucketBy([1, 2], () => key).get(key), [1, 2]);
});
test('supports null key', () => {
  assert.deepEqual(api.bucketBy([1], () => null).get(null), [1]);
});
test('rejects non-function keyer', () => {
  assert.throws(() => api.bucketBy([1], false), TypeError);
});
