const { xor } = require('./xor');

export const decrypt = (crypt: string, key: string) => xor(crypt, key);
