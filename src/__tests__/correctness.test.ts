import { getKey } from '../gen';
import { encrypt } from '../encrypt';
import { decrypt } from '../decrypt';

let key: string;
const message = 'message';

beforeEach(() => {
  key = getKey(Date.now.toString(), message.length);
});

test('correctness', () => {
  expect(decrypt(encrypt(message, key), key)).toBe(message);
});
