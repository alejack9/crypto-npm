import * as seedF from 'seed-random';
import * as assert from 'assert';

export function getKey(seed: string, length: number) {
  assert(seed, 'Seed is mandatory');
  assert(length, 'Length is mandatory');
  let key = '';
  const random = seedF(seed);
  for (let i = 0; i < length; i++) key += String.fromCharCode(Math.floor(random() * 255));
  return key;
}
