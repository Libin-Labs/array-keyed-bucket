import * as api from '@lp-labs/array-keyed-bucket';
import { bucketBy } from '@lp-labs/array-keyed-bucket';
console.log(bucketBy([1, 2, 3, 4], (n) => n % 2));
// @ts-expect-error invalid argument must be rejected by declarations
api.bucketBy('items', (x) => x);
