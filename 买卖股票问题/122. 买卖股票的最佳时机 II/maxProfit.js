/**
 * @param {number[]} prices
 * @return {number}
 */
/* 暴力解法 超时 */
var maxProfit = function(prices) {
  let len = prices.length;
  let res = 0;
  if (len < 2) {
    return 0;
  }

  var dfs = (index, status, profit) => {
    if (index == len) {
      res = Math.max(res, profit);
      return;
    }
  
    dfs(index + 1, status, profit);

    if (status == 0) {
      /* 不持有，卖掉 */
      dfs(index + 1, 1, profit - prices[index]);
    } else {
      /* 持有 买入 */
      dfs(index + 1, 0, profit + prices[index]);
    }
  }

  dfs(0, 0, res);
  return res;
}

/* 
贪心 直观解法
时间：O(N);
空间：O(1);
*/
var maxProfit = function(prices) {
  let len = prices.length;
  if (len < 2) return 0;
  let res = 0;

  for(let i = 1; i < len; i++) {
    let diff = prices[i] - prices[i - 1];
    if (diff > 0) {
      res += diff;
    }
  }

  return res;
}

/*
 动态规划Ⅰ
 时间：O(N);
  空间：O(N);
 */
var maxProfit = function(prices) {
  let len = prices.length;
  if (len < 2) return 0;

  let dp = Array.from({length: len}, () => new Array(1));
  
  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  for(let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }

  return dp[len - 1][0];
}

/* 
动态规划Ⅱ 状态压缩
时间：O(N);
空间：O(N);
*/
var maxProfit = function(prices) {
  let len = prices.length;
  if (len < 2) return 0;
  let cash = new Array(len);
  let hold = new Array(len);

  cash[0] = 0;
  hold[0] = -prices[0];

  for(let i = 1; i < len; i++) {
    cash[i] = Math.max(cash[i - 1], hold[i - 1] + prices[i]);
    hold[i] = Math.max(hold[i - 1], cash[i - 1] - prices[i]);
  }

  return cash[len - 1];
}

/* 
滚动变量
时间：O(N);
空间：O(1);
*/
var maxProfit = function(prices) {
  let len = prices.length;
  if (len < 2) return 0;

  let cash = 0;
  let hold = -prices[0];

  let preCash = cash;
  let preHold = hold;

  for(let i = 1; i < len; i++) {
    cash = Math.max(preCash, preHold + prices[i]);
    hold = Math.max(preHold, preCash - prices[i]);

    preCash = cash;
    preHold = hold;
  }

  return cash;
}


console.log(maxProfit([7,1,5,3,6,4]));