const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  let arrResult = [];
  if (Array.isArray(arr)) {
        arr.filter(word => {
          if (typeof (word) === 'string') {
            let newWord = word.trim();
            arrResult.push(newWord);
          }
          if (typeof (word) !== 'string') {return false};
        })
        return arrResult.map(x => x[0].toLocaleUpperCase()).sort().join('');
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
