const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    if (arr.length === 0) {return []}
    if (!Array.isArray(arr)) {throw new Error('\'arr\' parameter must be an instance of the Array!')}
     arr.forEach((val, index) => {
      if(val === '--discard-next'){return arr.splice(index, 2)}
      if(val === '--discard-prev'){return arr.splice(index - 1, 2)}
      if(val === '--double-next'){return arr[index] = arr[index + 1]}
      if(val === '--double-prev'){return arr[index] = arr[index - 1]}
    })
}

module.exports = {
  transform
};
