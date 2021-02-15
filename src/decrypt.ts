import { xor } from './xor';

export const decrypt = (crypt: string, key: string) => xor(crypt, key);
