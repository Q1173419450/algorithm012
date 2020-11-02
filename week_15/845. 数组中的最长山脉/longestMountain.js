/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
  let maxLength = 0;
  let i = 1;
  while(i < A.length) {
    let leftLen = 0;
    let rightLen = 0;
    while(i < A.length && A[i - 1] < A[i]) {
      i++;
      leftLen++
    }
    while(i < A.length && A[i - 1] > A[i]) {
      i++
      rightLen++
    }
    if(leftLen > 0 && rightLen > 0) {
      maxLength = Math.max(maxLength, leftLen + rightLen + 1);
    }
    while(i < A.length && A[i] === A[i - 1]) i++
  }

  return maxLength;
};