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
    arr.sort().filter(x => {
      if (typeof (x) === 'string') {arrResult.push(x)}
    })
    return arrResult.map(x => x[0]).join('');
}

module.exports = {
  createDreamTeam
};
