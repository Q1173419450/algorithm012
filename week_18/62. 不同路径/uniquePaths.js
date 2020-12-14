/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let dp = Array.from({ length: m + 1}, () => new Array(n + 1).fill(1));
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }
  return dp[m - 1][n - 1]
}

/*  */
var uniquePaths = function(m, n) {
  let dp = new Array(n + 1).fill(1);
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      dp[j] += dp[j - 1];
    }
  }
  return dp[n - 1];
}