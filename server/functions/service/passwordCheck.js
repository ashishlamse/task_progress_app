const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

/**
 * This function use for verify password.
 * @param {Enter by user} password 
 * @param {hashed password stored in database} hashPassword 
 */
exports.verifyPassword = (password, hashPassword) => {
    return password && hashPassword ? bcrypt.compare(password, hashPassword) : null;
}

/**
 * This function is used for hashed password.
 * @param {Entered by user.} password 
 */

exports.generateHashPassword = (password) => {
    return password ? bcrypt.hashSync(password, SALT_ROUNDS) : null;
}   