/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function(A) {
  let m = A.length;
  let n = A[0].length;
  let result = 0;

  for(let i = 0; i < m; i++) {
    if (A[i][0] == 0) {
      for(let j = 0; j < n; j++) {
        A[i][j] ^= 1;
      }
    }
  }

  for(let j = 0; j < n; j++) {
    let cnt = 0;
    for(let i = 0; i < m; i++) {
      cnt += A[i][j];
    }

    // max(cnt, m - cnt) 表示这一行最多有多少个 1。 1<<(n-j-1) 表示这一行的1的大小。
    result += Math.max(cnt, m - cnt) * (1 << (n - j - 1));
  }

  return result;
};