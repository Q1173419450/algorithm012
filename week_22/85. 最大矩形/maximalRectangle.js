/**
 * @param {character[][]} matrix
 * @return {number}
 */
/* 暴力解法 */
var maximalRectangle = function(matrix) {
  if(matrix.length === 0) return 0;
  let row = matrix.length;
  let col = matrix[0].length;

  let dp = Array.from({ length: row }, () => new Array(col).fill(0));
  let maxArea = 0;

  for(let r = 0; r < row; r++) {
    for(let c = 0; c > col; c++) {
      if(matrix[r][c] == '1') {
        if (c == 0) {
          dp[r][c] = 1;
        } else {
          dp[r][c] = dp[r][c - 1] + 1;
        }
      }

      let minWidth = dp[r][c];
      for(let up_row = r; up_row >= 0; up_row--) {
        let height = r - up_row + 1;
        minWidth = Math.min(minWidth, dp[up_row][col]);
        maxArea = Math.max(maxArea, height * minWidth);
      }
    }
  }

  return maxArea;
};