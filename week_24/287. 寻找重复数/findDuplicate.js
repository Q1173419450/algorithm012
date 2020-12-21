/**
 * @param {number[]} nums
 * @return {number}
 */
/* sort 函数对数组长度小于等于 10 的用插入排序(时间复杂度O(n^2), 空间复杂度O(1)) */
/* https://github.com/v8/v8/blob/ad82a40509c5b5b4680d4299c8f08d6c6d31af3c/src/js/array.js */
var findDuplicate = function(nums) {
  nums = nums.sort((a, b) => a - b);
  for(let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      return nums[i];
    }
  }

  return false;
};

/* 二分法 */
/* 快慢指针 */
var findDuplicate = function(nums) {
  let slow = 0;
  let fast = 0;
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];
    if (slow == fast) {
      let _slow = 0;
      while (nums[_slow] != nums[slow]) {
        slow = nums[slow];
        _slow = nums[_slow];
      }
      return nums[_slow];
    }
  }
}