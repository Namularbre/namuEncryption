'use strict'

const bcrypt = require("bcrypt");

/**
 * @param {String} plainText
 */
exports.encrypt = function encrypt(plainText) {
    const salt = 10;
    return bcrypt.hash(plainText, salt);
}

/**
 * @param {String} plainText
 * @param {String} encryptedText
 */
exports.compare = function compare(plainText, encryptedText) {
    return bcrypt.compare(plainText, encryptedText);
}

