/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let dp = new Array(n.length + 1);
  dp[0] = 1;
  dp[1] = 1;
  for(let i = 2; i < n.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n.length];
};