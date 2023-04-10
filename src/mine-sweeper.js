const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(mat) {
    for (let i = 0; i < mat.length; i++) {
      for (let j = 0; j < mat[i].length; j++) {
        if (mat[i][j] === false) {
          mat[i][j] = 0;
        }
        if (mat[i][j] === true) {
          mat[i][j] = 0;
          if(mat[i+1] !== undefined && mat[i+1][j+1] !== true) {
            mat[i+1][j+1] += 1;
          }
          if(mat[i+1] !== undefined && mat[i+1][j-1] !== true) {
            mat[i+1][j-1] += 1;
          }
          if(mat[i-1] !== undefined && mat[i-1][j+1] !== true) {
            mat[i-1][j+1] += 1;
          }
          if(mat[i-1] !== undefined && mat[i-1][j-1] !== true) {
            mat[i-1][j-1] += 1;
          }
          if(mat[i+1] !== undefined && mat[i+1][j] !== true) {
            mat[i+1][j] += 1;
          }
          if(mat[i][j+1] !== true) {
            mat[i][j+1] += 1;
          }
          if(mat[i-1] !== undefined && mat[i-1][j] !== true) {
            mat[i-1][j] += 1;
          }
          if(mat[i][j-1] !== true) {
            mat[i][j-1] += 1;
          }
        }
      }
    }
    return mat;
}

module.exports = {
  minesweeper
};
