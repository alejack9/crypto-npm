const assert = require("assert");
/**
 *
 * @param {string} a
 * @param {string} b
 */
const xor = (a, b) => {
    assert(
        a.length === b.length,
        "The two operators must have the same length"
    );
    let i = 0;
    let encrypted = "";
    for (let char of a)
        encrypted += String.fromCharCode(char.charCodeAt() ^ b.charCodeAt(i++));
    return encrypted;
};

module.exports = { xor };
