/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
/* 有障碍物 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (!obstacleGrid.length) return 0;

  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;

  let dp = Array.from({ length: m }, () => new Array(n).fill(0));

  for(let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }

  for(let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(obstacleGrid[i][j] == 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
}