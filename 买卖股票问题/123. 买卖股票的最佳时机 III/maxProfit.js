/**
 * @param {number[]} prices
 * @return {number}
 */
/* 
  动态规划I
  dp[i][j][k]  
*/
var maxProfit = function(prices) {
  let len = prices.length;
  if (len < 2) return 0;

  let dp = Array.from({ length: len }, () => Array.from({ length: 3 }, () => new Array(2).fill(0)));
  
  dp[0][1][1] = -prices[0];
  dp[0][2][1] = -Infinity;

  for(let i = 1; i < len; i++) {
    dp[i][1][1] = Math.max(dp[i - 1][1][1], -prices[i]);
    dp[i][1][0] = Math.max(dp[i - 1][1][0], dp[i - 1][1][1] + prices[i]);

    dp[i][2][1] = Math.max(dp[i - 1][2][1], dp[i - 1][1][0] - prices[i]);
    dp[i][2][0] = Math.max(dp[i - 1][2][0], dp[i - 1][2][1] + prices[i]);
  }
  return Math.max(dp[len - 1][1][0], dp[len - 1][2][0]);
};