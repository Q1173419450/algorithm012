/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let sum = 0;
  
  for(let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      sum += prices[i+1] - prices[i];
    }
  }

  return sum;
};

/* 贪心 */
var maxProfit = function(prices) {
  let i = 0;
  let buy, sell, profit = 0;
  let len = prices.length - 1;

  while(i < len) {
    while (i < len && prices[i + 1] <= prices[i]) {
      i++
    }

    buy = prices[i];

    while (i < len && prices[i + 1] > prices[i]) {
      i++
    }

    sell = prices[i]

    profit += sell - buy;
  }

  return profit;
}

console.log(maxProfit([1, 2, 3, 4]))



/* 动态规划 */
var maxProfit = function(prices) {
  let len = prices.length;
  if (len < 2) {
    return 0;
  }

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