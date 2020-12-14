/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/* 俩次遍历 */
var moveZeroes = function(nums) {
  if (!nums.length) return [];
  let j = 0;
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i];
    }
  }
  
  for(let i = j; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

/*快排 */
var moveZeroes = function(nums) {
  if (!nums.length) return [];
  let j = 0;
  for(let i = 1; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }

  return nums;
}

/* 优化 */
var moveZeroes = function(nums) {
  if (!nums.length) return [];
  let j = 0;
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i > j) {
        nums[j] = nums[i];
        nums[i] = 0;
      }
      j++
    }
  }
  return nums;
}