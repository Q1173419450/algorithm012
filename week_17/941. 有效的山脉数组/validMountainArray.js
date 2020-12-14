/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  let left = 0;
  let right = A.length - 1;
  while(left + 1 < A.length && A[left] < A[left + 1]) left++
  while(right > 0 && A[right - 1] > A[right]) right--
  return left > 0 && right < A.length - 1 && left == right
};