/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let len = nums.length;
  if (len < 2) return false
  let sum = 0, maxNum = 0;
  for(let num of nums) {
    sum += num;
    maxNum = Math.max(maxNum, num);
  }

  if (sum % 2 != 0) return false;
  let target = sum / 2;
  if (maxNum > target) return false;

  let dp = Array.from({ length: len }, () => new Array(target + 1).fill(false));
  for(let i = 0; i < n; i++) {
    dp[i][0] = true;
  }
  dp[0][0] = true;

  for(let i = 1; i < n; i++) {
    let num = nums[i];
    for(let j = 1; j <= target; j++) {
      if (j >= num) {
        dp[i][j] = dp[i - 1][j] | dp[i - 1][j - num]
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }
  return dp[n - 1][target];
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
/* 空间压缩 */
 var canPartition = function(nums) {
  let len = nums.length;
  if (len < 2) return false
  let sum = 0, maxNum = 0;
  for(let num of nums) {
    sum += num;
    maxNum = Math.max(maxNum, num);
  }

  if (sum % 2 != 0) return false;
  let target = sum / 2;
  if (maxNum > target) return false;

  let dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for(let i = 1; i < len; i++) {
    let num = nums[i];
    for(let j = target; j >= num; j--) {
      dp[j] |= dp[j - num];
    }
  }
  return dp[target];
};