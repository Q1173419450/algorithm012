/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b);
  let ans = [];
  for(let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (left < right) {
      if (nums[i] + nums[left] + nums[right] > 0) {
        right--
      } else if (nums[i] + nums[left] + nums[right] < 0) {
        left++
      } else {
        ans.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) {
          left++
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--
        }
        left++;
        right--;
      }
    }
  }
  return ans;
};