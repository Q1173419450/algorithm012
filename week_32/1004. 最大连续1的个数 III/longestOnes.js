/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
  let left = 0;
  let right = 0;
  let res = 0;
  let countZero = 0;
  while (right < A.length) {
    if (A[right] == 0) {
      countZero++;
    }
    while (countZero > K) { // 遇到超过 K 个 0 ，则移动左指针
      if (A[left] == 0) {
        countZero--
      }
      left++
    }
    res = Math.max(res, right - left + 1) // 得到最大窗口
    right++;
  }
  return res;
};