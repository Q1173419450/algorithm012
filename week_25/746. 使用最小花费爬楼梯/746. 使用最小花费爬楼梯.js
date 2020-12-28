/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  for(let i = 2; i < cost.length; i++) {
    // 爬一个或者俩个截图中的最小值
    cost[i] += Math.min(cost[i - 1], cost[i - 2])
  }
  // 最后一个阶梯或俩个阶梯的最小值
  return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
};