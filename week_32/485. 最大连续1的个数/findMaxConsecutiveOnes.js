/**
 * @param {number[]} nums
 * @return {number}
 */
/* 常规遍历 */
var findMaxConsecutiveOnes = function(nums) {
  let len = nums.length;
  let max = 0;
  let count = 0;
  for(let i = 0; i < len; i++) {
    if (nums[i] === 1) {
      count++
    } else {
      if (max < count) {
        max = count;
      }
      count = 0;
    }
  }

  return max < count ? count : max;
};

/* 双指针 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let len = nums.length;
  let left = 0;
  let right = 0;
  let maxCount = 0;
  while (right < len) {
    if (nums[right] == 0) {   // 遇到 0 则查看当前窗口 1 的个数，存入 maxCount
      maxCount = Math.max(maxCount, right - left);
      right++
      left = right; // left 指针指向 right 位置
    } else {  // 遇到 1 则只移动 right 指针
      right++
    }
  }
  return Math.max(maxCount, right - left)
}


let arr1 = [1,1,0,1,1,1];
let arr2 = [0];
let res1 = findMaxConsecutiveOnes(arr1);
let res2 = findMaxConsecutiveOnes(arr2);
console.log(res1, res2);