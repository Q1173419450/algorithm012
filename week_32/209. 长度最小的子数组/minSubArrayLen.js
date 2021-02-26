/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let left = 0;
  let right = 0;
  let count = Infinity;
  let sum = 0;
  while (right < nums.length) {
    sum += nums[right];
    while (sum >= target) {
      count = Math.min(count, right - left + 1);
      sum -= nums[left];
      left++;
    }
    right++
  }
  return count == Infinity ? 0 : count;
};