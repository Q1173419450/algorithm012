/**
 * @param {number[]} A
 * @return {number[]}
 */
// api解法
// 时间：O(nlogN)
// 空间: O(1)
var sortedSquares = function(A) {
  return A.map(item => item * item).sort((a, b) => a - b);
};

var sortedSquares = function(A) {
  let left = 0;
  let right = A.length - 1;
  let k = A.length - 1;
  let ans = []
  while(left <= right) {
    let temp;
    if(A[left] + A[right] < 0) {
      temp = A[left] * A[left];
      left++
    } else {
      temp = A[right] * A[right];
      right--
    }
    ans[k--] = temp
  }

  return ans
}