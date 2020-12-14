/**
 * @param {number[][]} matrix
 */
/* 暴力法 */
var NumMatrix = function(matrix) {
  this.data = matrix;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let sum = 0;
  for(let r = row1; r <= row2; r++) {
    for(let c = col1; c <= col2; c++) {
      sum += this.data[r][c];
    }
  }
  return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

/* 缓存行 */
var NumMatrix = function (matrix) {
  let row = matrix.length;
  let col = matrix[0].length;

  this.dp = Array.from({ length: row }, () => new Array(col).fill(0));
  for(let r = 0; r < row; r++) {
    for(let c = 0; c < col; c++) {
      this.dp[r][c + 1] = this.dp[r][c] + matrix[r][c];
    }
  }
}

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let sum = 0;
  for(let r = row1; r <= row2; r++) {
    sum += this.dp[r][col2 + 1] - this.dp[r][col1];
  }
  return sum;
};

// /* 空间优化 */
// var NumMatrix = function (matrix) {
//   let row = matrix.length;
//   let col = matrix[0].length;

//   this.dp = new Array(col).fill(0);
//   for(let r = 0; r < row; r++) {
//     for(let c = 0; c < col; c++) {
//       dp[c + 1] = dp[c] + matrix[r][c];
//     }
//   }
// }

// /** 
//  * @param {number} row1 
//  * @param {number} col1 
//  * @param {number} row2 
//  * @param {number} col2
//  * @return {number}
//  */
// NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
//   let sum = 0;
//   for(let r = row1; r <= row2; r++) {
//     sum += this.dp[row][col2 + 1] - this.dp[row][col1];
//   }
//   return sum;
// };