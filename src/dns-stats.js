const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
    const resultObj = {};
    let count1 = 0;
    let count2 = 0;
    
    domains.forEach(item => {
      const reverseString = item.split('.').reverse().join('.');
      if (reverseString.split('.').length > 1) {
        count1++;
        resultObj['.'+reverseString.split('.').slice(0,1).join('.')] = count1;
      }
      if (reverseString.split('.').length > 1) {
        count2++;
        resultObj['.'+reverseString.split('.').slice(0,2).join('.')] = count2;
      }
      if (reverseString.split('.').length === 3) {
        Object.keys(resultObj).forEach(x => {
          if (x !== reverseString.split('.').slice(0,3).join('.')) {
            resultObj['.'+reverseString.split('.').slice(0,3).join('.')] = 1;
          } else {
            resultObj['.'+reverseString.split('.').slice(0,3).join('.')]++;
          }
        })
      }
    })
  return resultObj;
}

module.exports = {
  getDNSStats
};
