const { xor } = require("./xor");

/**
 *
 * @param {string} message
 * @param {string} key
 */
const encrypt = (message, key) => xor(message, key);

module.exports = { encrypt };
