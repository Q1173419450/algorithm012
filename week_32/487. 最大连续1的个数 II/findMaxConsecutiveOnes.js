var findMaxConsecutiveOnes = function (nums) {
  let left = 0;
  let right = 0;
  let res = 0;
  let countZero = 0;
  while (right < nums.length) {
    if (nums[right] == 0) {
      countZero++;
    }
    while (countZero > 1) { // 遇到超过一个 0 ，则移动左指针
      if (nums[left] == 0) {
        countZero--
      }
      left++
    }
    res = Math.max(res, right - left + 1) // 得到最大窗口
    right++;
  }
  return res;
}