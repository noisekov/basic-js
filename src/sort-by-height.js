const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    const indexMinusOne = [];
    arr.forEach((item, index) => {
      if (item === -1) {
        indexMinusOne.push(index);
      }
    })
    let sortArr = arr.sort((a,b) => a -b).filter(x => x !== -1);
    indexMinusOne.forEach(x => {
      sortArr.splice(x, 0 , -1);
    })
    return sortArr;
}

module.exports = {
  sortByHeight
};
