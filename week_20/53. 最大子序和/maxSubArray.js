/**
 * @param {number[]} nums
 * @return {number}
 */

/* 暴力解答 */
var maxSubArray = function(nums) {
  let max = -Infinity;
  let len = nums.length;
  for(let i = 0; i < len; i++) {
    let sum = 0;
    for(let j = i; j < len; j++) {
      console.log(j);
      sum += nums[j];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max
};

/* 动态规划 */
var maxSubArray = function(nums) {
  let len = nums.length;
  let dp = new Array(len).fill(0);
  dp[0] = nums[0];
  let ans = nums[0];
  for(let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    ans = Math.max(dp[i], ans);
  }
  console.log(dp);
  return ans;
}

let nums = [-2,1,-3,4,-1,2,1,-5,4];
maxSubArray(nums);