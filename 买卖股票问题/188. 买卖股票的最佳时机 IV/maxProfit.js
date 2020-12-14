/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
/* 超时写法 */
var maxProfit = function(k, prices) {
  let len = prices.length;
  if (k == 0 || len < 2) return 0;
  if (k >= len / 2) return greedy(prices, len);

  // 状态转移方程里下标有 -1 的时候，为了防止数组下标越界，多开一行，因此第一维的长度是 len + 1 
  // 第二维表示交易次数，从 0 开始，因此第二维的长度是 k + 1 
  // 第三维表示是否持股，0：不持股，1：持股
  let dp = Array.from({ length: len + 1 }, () => Array.from({ length: k + 1 }, () => new Array(2).fill(0)));

  for(let i = 0; i <= len; i++) {
    for(let j = 0; j <= k; j++) {
      dp[i][j][1] = -Infinity
    }
  }

  for(let i = 1; i <= len; i++) {
    for(let j = 1; j <= k; j++) {
      // 上一轮交易持股与这一轮交易持股，取最大值得出这一轮交易持股
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i - 1]); 
      // 上一轮交易不持股，与这一轮交易持股，取最大值得出这一轮交易不持股
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i - 1]);
    }
  }
  return dp[len][k][0];
};

var maxProfit = function(k, prices) {
  let len = prices.length;
  if (k == 0 || len < 2) return 0;
  // 特殊判断，因为交易一次需要 2 天，如果 k >= len / 2，相当于没有限制
  if (k >= len / 2) return greedy(prices, len);

  // 状态转移方程里下标有 -1 的时候，为了防止数组下标越界，多开一行，因此第一维的长度是 len + 1 
  // 第二维表示交易次数，从 0 开始，因此第二维的长度是 k + 1 
  // 第三维表示是否持股，0：不持股，1：持股
  let dp = Array.from({length: k + 1}, () => new Array(2).fill(0));

  for(let j = 0; j <= k; j++) {
    dp[j][1] = -Infinity
  }

  for(let price of prices) {
    for(let j = 1; j <= k; j++) {
      // 这一轮是否持股，得看上一轮不持股的值减去这一轮的股价，与这一轮持股的最大值
      dp[j][1] = Math.max(dp[j][1], dp[j - 1][0] - price);
      // 这一轮是否不持股，得看这一轮持股加上这一轮的股价比这轮不持股大
      dp[j][0] = Math.max(dp[j][0], dp[j][1] + price);
    }
  }

  return dp[k][0];
}

/* 股票买卖2，不限制买卖次数 */
var greedy = function(prices, len) {
  let res = 0;
   for(let i = 1; i < len; i++) {
     if (prices[i] > prices[i - 1]) {
       res += prices[i] - prices[i - 1]
     }
   }

   return res;
}