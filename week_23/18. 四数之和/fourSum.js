/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
/* 为何要排序：因为防止出现相同的结果,且容易移动指针 */
var fourSum = function(nums, target) {
  nums = nums.sort((a, b) => a - b);
  let len = nums.length;
  let ans = [];

  for(let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    for(let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1])continue;
      let k = j + 1;
      let z = len - 1;
      while (k < z) {
        if (nums[i] + nums[j] + nums[k] + nums[z] > target) {
          z--
        } else if (nums[i] + nums[j] + nums[k] + nums[z] < target) {
          k++
        } else {
          while (k > 0 && nums[k] === nums[k + 1]) k++;
          while (z > 0 && nums[z] === nums[z - 1]) z--;
          let temp = [nums[i], nums[j], nums[k], nums[z]];
          ans.push(temp);
          k++;
          z--;
        }
      }
    }
  }
  return ans
};

console.log(fourSum([0,0,0,0], 0));