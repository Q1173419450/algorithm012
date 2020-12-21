/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  let len = prices.length;
  if (len < 2) return 0;

  let dp = Array.from({length: len}, () => new Array(2).fill(0));
  // 不持有股票
  dp[0][0] = 0;
  // 持有股票
  dp[0][1] = -prices[0] - fee;

  for(let i = 1; i < len; i++) {
    // 今天不持有 = Math.max(昨天不持有，昨天持有 + 今天卖出)
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    // 今天持有 = Math.max(昨天持有，昨天卖出 + 今天持有)
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i] - fee);
  }

  return dp[len - 1][0];
};

/* 空间优化 */
var maxProfit = function(prices, fee) {
  let len = prices.length;
  if (len < 2) return 0;

  let dp = new Array(2).fill(0);
  // 不持有
  dp[0] = 0;
  // 持有
  dp[1] = -prices[0] - fee;

  for(let i = 1; i < len; i++) {
    // 今天不持有 = Math.max(昨天不持有，昨天持有 + 今天卖出)
    dp[0] = Math.max(dp[0], dp[1] + prices[i]);
    // 今天持有 = Math.max(昨天持有，昨天卖出 + 今天持有)
    dp[1] = Math.max(dp[1], dp[0] - prices[i] - fee);
  }

  return dp[0];
};