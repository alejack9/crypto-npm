const seedF = require("seed-random");
const assert = require("assert");

/**
 *
 * @param {string} seed
 * @param {number} length
 */
function getKey(seed, length) {
    assert(seed, "Seed is mandatory");
    assert(length, "Length is mandatory");
    let key = "";
    const random = seedF(seed);
    for (let i = 0; i < length; i++)
        key += String.fromCharCode(Math.floor(random() * 255));
    return key;
}

module.exports = { getKey };
