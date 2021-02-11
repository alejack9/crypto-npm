import { getKey } from '../gen';

test('key length test', () => {
  expect(getKey('test', 10).length).toBe(10);
});

test('algorithm consistency', () => {
  expect(getKey('test', 10)).toBe(getKey('test', 10));
});

test('different seeds', () => {
  expect(getKey('test', 10)).not.toBe(getKey('tost', 10));
});
