const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    const result = [];
    `${n}`.split('').forEach(item => {
      result.push(+`${n}`.replace(item, ''));
    })
    return result.reduce((a, b) => Math.max(a, b), -Infinity);
}

module.exports = {
  deleteDigit
};
