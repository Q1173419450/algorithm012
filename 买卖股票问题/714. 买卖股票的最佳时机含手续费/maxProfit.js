/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  let len = prices.length;
  if (len < 2) return 0;

  let dp = Array.from({length: len}, () => new Array(2).fill(0));
  dp[0][0] = 0;
  dp[0][1] = -prices[0] - fee;

  for(let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i] - fee);
  }

  return dp[len - 1][0];
};

var maxProfit = function(prices, fee) {
  let len = prices.length;
  if (len < 2) return 0;

  let dp = new Array(2).fill(0);
  dp[0] = 0;
  dp[1] = -prices[0] - fee;

  for(let price of prices) {
    dp[0] = Math.max(dp[0], dp[1] + price);
    dp[1] = Math.max(dp[1], dp[0] - price - fee);
  }
  return dp[0]
}