'use strict'

const bcrypt = require("bcrypt");

/**
 * @param {String} plainText
 */
exports.encrypt = async function encrypt(plainText) {
    const salt = 10;
    return await bcrypt.hash(plainText, salt);
}

/**
 * @param {String} plainText
 * @param {String} encryptedText
 */
exports.compare = async function compare(plainText, encryptedText) {
    return await bcrypt.compare(plainText, encryptedText);
}
