/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
  let i = matrix.length;
  let j = 0;
  while (i >= 0 && j < matrix.length) {
    if (matrix[i][j] > target) {
      i--;
    } else if (matrix[i][j] < target) {
      j++
    } else {
      return true;
    }
  }
  
  // let i = 0;
  // let j = matrix.length;
  
  // while (i < matrix.length && j >= 0) {
  //   if (matrix[i][j] > target) {
  //     j--
  //   } else if (matrix[i][j] < target) {
  //     i++
  //   } else {
  //     return true;
  //   }
  // }

  return false;
};