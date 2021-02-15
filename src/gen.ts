import * as seedF from 'seed-random';

export function getKey(seed: string, length: number) {
  let key = '';
  const random = seedF(seed);
  for (let i = 0; i < length; i++) key += String.fromCharCode(Math.floor(random() * 255));
  return key;
}
