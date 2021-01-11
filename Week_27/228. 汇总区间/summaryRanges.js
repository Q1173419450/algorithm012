/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if(nums.length === 0) return [];
  let ans = [];
  for(let i = 0; i < nums.length; i++) {
      let str = nums[i];
      let pre = i;
      while (i < nums.length - 1 && nums[i] + 1 == nums[i + 1]) i++;
      if(pre != i) {
          str += '->' + nums[i];
      }
      ans.push(str);
  }
  return ans;
};