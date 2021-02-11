const { xor } = require('./xor');

export const encrypt = (message: string, key: string) => xor(message, key);
