/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums.length) return 0;
  let p = 0;
  let q = 1;
  while (q < nums.length) {
    if (nums[p] != nums[q]) {
      if (q - p > 1) {  // 若没有重复元素，则会原地复制一遍，所以可以判断q 与 p 的间隔，来解决。
        nums[p + 1] = nums[q];
      }
      p++;
    }
    q++;
  }
  return p + 1;
};

let arr = [0,0,1,1,1,2,2,3,3,4];
removeDuplicates(arr);