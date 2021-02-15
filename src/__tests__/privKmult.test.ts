import { getKey } from '../gen';
import { encrypt } from '../encrypt';

const A = (c: string[]) => c[0] === c[1];

const privKmult = (n: number) => {
  const key = getKey(Date.now.toString(), n);
  const m = [
    ['a'.repeat(n), 'b'.repeat(n)],
    ['a'.repeat(n), 'a'.repeat(n)],
  ];
  const b = Math.floor(Math.random());
  const c = m[b].map((mm) => encrypt(mm, key));
  return Number(A(c)) === b;
};

test('breakable via PrivKmult experiment: an adversary can understand whether two encrypted messages were the same or not', () => {
  expect(privKmult(5)).toBe(true);
  expect(privKmult(8)).toBe(true);
  expect(privKmult(10)).toBe(true);
  expect(privKmult(20)).toBe(true);
});
