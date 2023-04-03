const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(address) {
    const arr = address.replace(/-/g,'');
    const checkVal = [];
    for (let i = 0; i < arr.length; ++i) {
      checkVal.push((arr[i] + arr[++i]));
    }
    let isTrue = 0;
    let isFalse = 0;
    checkVal.forEach (x => {
      if (isNaN(parseInt(x, 16))) {
        isFalse++;
      } else {
        isTrue++;
      }
    })
    return (isFalse > 0) ? false : true;
}
module.exports = {
  isMAC48Address
};
