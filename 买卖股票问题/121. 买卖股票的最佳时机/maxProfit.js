/**
 * @param {number[]} prices
 * @return {number}
 */
/* 暴力 */
var maxProfit = function(prices) {
  let max = 0;
  for(let i = 0; i < prices.length - 1; i++) {
    for(let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i]; // 固定一个值，另外一个值移动来进行对比，选取最大值
      if (profit > max) {
        max = profit;
      }
    }
  }

  console.log(max);
  return max;
};

var maxProfit = function(prices) {
  let max = 0;
  let min = Infinity;
  for(let i = 0; i < prices.length; i++) {
    if(prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > max) {
      max = prices[i] - min;
    }
  }

  console.log(max);
  return max;
}

var maxProfit = function(prices) {
  let max = 0;
  let min = prices[0];
  for(let i = 1; i < prices.length; i++) {
    max = Math.max(prices[i] - min, max); // 最高点
    min = Math.min(prices[i], min); // 最低点
  }

  return max;
}

let arr = [7,1,5,3,6,4];
let max = maxProfit(arr);
console.log(max)