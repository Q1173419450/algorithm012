/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let n = matrix.length;
  for(let i = 0; i < Math.floor(n / 2); i++) {
    for(let j = 0; j < n - i - 1; j++) {
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][i];  // 左下到左上
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]; //右下到左下 
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];  //右上到右下
      matrix[j][n - i - 1] = tmp;
    }
  }
  return matrix;
};

/* 上下转、对角翻转 */
var rotate = function(matrix) {
  let n = matrix.length;
  for(let i = 0; i < Math.floor(n / 2); i++) {
    [matrix[i], matrix[n - 1 - i]] = [matrix[n - 1 - i], matrix[i]];
  }

  for(let i = 0; i < n; i++) {
    for(let j = i + 1; j < n; i++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
}