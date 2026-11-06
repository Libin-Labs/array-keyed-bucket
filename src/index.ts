export function bucketBy<T, K>(items: readonly T[], keyOf: (item: T) => K): Map<K, T[]> {
  if (!Array.isArray(items) || typeof keyOf !== 'function')
    throw new TypeError('Expected array and key function');
  const buckets = new Map<K, T[]>();
  for (const item of items) {
    const key = keyOf(item),
      bucket = buckets.get(key);
    if (bucket) bucket.push(item);
    else buckets.set(key, [item]);
  }
  return buckets;
}
