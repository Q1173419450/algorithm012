/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let j = 0;  // 记录非 0 数有多少个
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[j] = nums[i];
      if (j != i) { // 补齐 0 
        nums[i] = 0;
      }
      j++ // 非 0 数索引 + 1
    }
  }

  return nums
}

console.log(moveZeroes([0,1,0,3,12]))