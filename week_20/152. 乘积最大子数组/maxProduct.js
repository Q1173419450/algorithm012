/**
 * @param {number[]} nums
 * @return {number}
 */
/* 暴力 */
var maxProduct = function(nums) {
  let res = -Infinity;
  for(let i = 0; i < nums.length; i++) {
    let sum = 1;
    for(let j = i; j < nums.length; j++) {
      sum *= nums[j]
      if(sum > res) {
        res = sum;
      }
    }
  }
  return res
};

var maxProduct = function(nums) {
  let len = nums.length;
  if (!len) return 0;
  let res = 0;

  let preMax = nums[0];
  let preMin = nums[0];

  let curMax = 0;
  let curMin = 0;

  for(let i = 1; i < len; i++) {
    if (nums[i] >= 0) {
      curMax = Math.max(preMax * nums[i], nums[i]);
      curMin = Math.min(preMin * nums[i], nums[i]);
    } else {
      curMax = Math.max(preMin * nums[i], nums[i]);
      curMin = Math.min(preMax * nums[i], nums[i]);
    }
    res = Math.max(res, curMax);

    preMax = curMax;
    preMin = curMin;
  }
  return res;
}

let arr = [0,2]
maxProduct(arr)