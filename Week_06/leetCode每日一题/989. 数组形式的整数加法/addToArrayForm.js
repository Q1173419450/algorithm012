/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
  K = K.toString().spilt('');

  let i = A.length - 1;
  let j = K.length - 1;

  let carry = 0;
  let res = [];

  while(i >= 0 || j >= 0) {
    let n1 = i >= 0 ? A[i] : 0;
    let n2 = j >= 0 ? Number(K[j]) : 0;

    temp = n1 + n2 +carry;

    carry = Math.floor(temp / 10);
    res.push(temp % 10);

    i--;
    j--
  }

  if (carry == 1) res.push(1);

  return res.reverse();
};