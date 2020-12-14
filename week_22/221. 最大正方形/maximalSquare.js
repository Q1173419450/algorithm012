/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (!matrix.length) return 0;
  let width = matrix.length;
  let height = matrix[0].length;
  let dp = Array.from({ length: width + 1 }, () => new Array(height + 1).fill(0));
  let res = 0;

  for(let w = 1; w < width + 1; w++) {
    for(let h = 1; h < height + 1; h++) {
      if (matrix[w - 1][h - 1] == '1') {
        dp[w][h] = Math.min(dp[w][h - 1], dp[w - 1][h], dp[w - 1][h - 1]) + 1;
        res = Math.max(res, dp[w][h]);
        console.log(res);
      }
    }
  }
  return res * res;
};