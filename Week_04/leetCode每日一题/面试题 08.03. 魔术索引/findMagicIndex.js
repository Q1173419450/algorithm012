/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function(nums) {
  if (nums.length === 0) return -1

  let res = [];

  for(let i = 0; i < nums.length; i++) {
    if (nums[i] == i) {
      res.push(i);
    }
  }

  return res.length ? res[0] : -1;
};