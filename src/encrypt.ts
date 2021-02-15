import { xor } from './xor';

export const encrypt = (message: string, key: string) => xor(message, key);
