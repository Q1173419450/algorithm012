/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  for(let i = 0; i < nums.length; i++) {
    while (nums[nums[i] - 1] != nums[i]) {  // 对应数字放到对应索引，最终找到索引不对的值，抽离出来
      [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
    }
  }

  let res = [];
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) {
      res.push(nums[i]);
    }
  }
  return res;
};

let res = findDuplicates([4,3,2,7,8,2,3,1])
console.log(res);