/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  for(let i = 0; i < nums.length; i++) {
    while (nums[nums[i] - 1] != nums[i]) {  // 对应数字放到对应索引，最终找到索引不对的值，抽离出来
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }

  let res = [];
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) {
      res.push(i + 1);
    }
  }
  return res;
};