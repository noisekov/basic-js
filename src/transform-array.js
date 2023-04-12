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
  let arrIndexRemove = new Set();
  let resultArr = [];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  } else if (arr.length === 0) {
    return [];
  } else {
    arr.forEach((val, index, ar) => {
      if(val === '--discard-next'){
        if (arr[index+1]) {
          arrIndexRemove.add(index+1);
       }
        return false
      }
      if(val === '--discard-prev'){
        if (arr[index-1]) {
          arrIndexRemove.add(index-1);
       }
        return false
      }
      if(val === '--double-next'){
        if (arr[index+1]) {
          resultArr.push(arr[index+1])
       }
        return false
      }
      if(val === '--double-prev'){
        if (arr[index-1]) {
          if (arr[index-2] === '--discard-next') {
            return false
          } else {
            resultArr.push(arr[index-1])
          }
       } 
        return false;
      }
      resultArr.push(val)
    })
  }
 arrIndexRemove.forEach(x => {
    resultArr.splice(x-1, 1);
  })
  return resultArr;
}

module.exports = {
  transform
};
