/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let i = 0;
  let j = 1;

  while(i < A.length && j < A.length) {
    if (A[i] % 2 == 0) {
      i += 2;
    } else if (A[j] % 2 == 1) {
      j +=2;
    } else {
      let temp = A[i];
      A[i] = A[j];
      A[j] = temp;
      i += 2;
      j += 2;
    }
  }
  console.log(A)
  return A
};

sortArrayByParityII([4,2,5,7])

/* ------------------------------------------ */

var sortArrayByParityII = function(A) {
  let odd = 1;
  let even = 0;

  while(odd < A.length && even < A.length) {
    while(odd < A.length && A[odd] % 2 === 1) {
      odd += 2;
    }
    while(even < A.length && A[even] % 2 === 0) {
      even += 2;
    }
    if (odd < A.length && even < A.length) {
      let temp = A[odd];
      A[odd] = A[even];
      A[even] = temp;
    }
  }

  console.log(A)
  return A;
}

sortArrayByParityII([4,2,5,7])