/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
  let N = A.length;
  if (N != B.length) return false;
  if (N == 0) return true;

  let next = new Array(N);
  getNext(next, N);

  let matchLen = 0;
  let strs = A + A;
  for (let i = 0; i < strs.length; i++) {
    while (matchLen > 0 && B[matchLen] != strs[i]) {
      matchLen = next[matchLen - 1];
    }
    if (B[i] == strs[matchLen]) matchLen++;
    if (matchLen == N) return true;
  }
  return false
};

var getNext = function (next, s) {
  let j = 0;
  next[0] = 0;

  for(let i = 1; i < s.length; i++) {
    while (j > 0 && s[i] != s[j]) { // 不相等时?
      j = next[j - 1];
    }

    if (s[i] == s[j]) j++;  // 前后缀相等则 j + 1
    next[i] = j;
  }
}