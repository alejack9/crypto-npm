import * as assert from 'assert';

export const xor = (a: string, b: string) => {
  assert(a.length === b.length, 'The two operators must have the same length');
  let i = 0;
  let encrypted = '';
  for (let c of a) encrypted += String.fromCharCode(c.charCodeAt(0) ^ b.charCodeAt(i++));
  return encrypted;
};
