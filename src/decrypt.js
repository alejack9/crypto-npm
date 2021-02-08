const { xor } = require("./xor");

/**
 *
 * @param {string} crypt
 * @param {string} key
 */
const decrypt = (crypt, key) => xor(crypt, key);

module.exports = { decrypt };
