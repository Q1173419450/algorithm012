/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let res = 0;
  let len = prices.length;

  for(let i = 0; i < len - 1; i++) {
    let diff = prices[i + 1] - prices[i];
    if (diff > 0) {
      res += diff
    }
  }

  return res;
};

