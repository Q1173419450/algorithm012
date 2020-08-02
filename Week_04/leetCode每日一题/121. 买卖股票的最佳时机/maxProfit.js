/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let max = 0;
  for(let i = 0; i < prices.length - 1; i++) {
    for(let j = i + 1; j < prices.length; j++) {
      let currprice = prices[j] - prices[i];
      if (currprice > max) {
        max = currprice;
      }
    }
  }

  return max
};

var maxProfit = function(prices) {
  let minPrice = Infinity;
  let maxPrice = 0;

  for(let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } else if (prices[i] - minPrice > maxPrice) {
      maxPrice = prices[i] - minPrice
    }
  }

  return maxPrice;
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([2,5,1,3]))