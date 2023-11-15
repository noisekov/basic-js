const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    if (Array.isArray(arr)) {
      count++;
      arr.forEach((x) => {
        if (Array.isArray(x)) {
          if (this.calculateDepth(x) >= count) {
            count = this.calculateDepth(x) + 1;
          }
        }
      });
    }
    return count;
  }
}

module.exports = {
  DepthCalculator,
};
