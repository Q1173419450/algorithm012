/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let cur = 0;
  let pre = 1;
  while (pre < nums.length) {
    if (nums[cur] != nums[pre]) {
      if (pre - cur > 1) {  // 优化，间隔相距大于 1 才进行复制
        nums[cur + 1] = nums[pre];
      }
      cur++
    }
    pre++;
  }
  return cur + 1;
};