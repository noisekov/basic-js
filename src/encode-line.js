const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
    str = str.split('');
    let result = [];
    
    str.forEach(x => {
      if (result.length > 0) {
        if(result.at(-1) === x) {
          let indexTheSame = result.indexOf(result.at(-1));
          if (result[indexTheSame-1] >= 2) {
            result[indexTheSame-1]++;
            return false;
          }
          result.splice(indexTheSame, 0, 2);
        } else {
          result.push(x);
        }
      } else {
        result.push(x);
      }
    })
    return result.join('');
}

module.exports = {
  encodeLine
};
