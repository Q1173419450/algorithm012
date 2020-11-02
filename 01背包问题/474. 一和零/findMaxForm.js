/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
/*
  题目问啥，动态方程就定义成啥
  dp[i][j][k] 在字符[0, i] 之间 能够使 j 个 0 和 k 个 1 的字符串的数值最大
*/
var findMaxForm = function(strs, m, n) {
  let len = strs.length;
  let dp = Array.from({ length: len + 1 }, () => Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0)));

  for(let i = 1; i <= len; i++) {
    let cnt = countZeroAndOne(strs[i - 1]);
    console.log(cnt)
    for(let j = 0; j <= m; j++) {
      for(let k = 0; k <= n; k++) {
        dp[i][j][k] = dp[i - 1][j][k];

        let zeros = cnt[0];
        let ones = cnt[1];
        if(j >= zeros && k >= ones) {
          dp[i][j][k] = Math.max(dp[i - 1][j][k], dp[i - 1][j - zeros][k - ones] + 1);
        }
      }
    }
  }
  console.log(dp[len][m][n])
  return dp[len][m][n];
};

var countZeroAndOne = (str) => {
  let cnt = new Array(2).fill(0);
  for(let num of str) {
    cnt[num.charCodeAt() - '0'.charCodeAt()]++
  }
  return cnt;
}

// 空间优化
var findMaxForm = function(strs, m, n) {
  let dp = Array.from({length: m + 1}, () => new Array(n + 1).fill(0));
  for(let num of strs) {
    let cnt = countZeroAndOne(num);
    let zeros = cnt[0];
    let ones = cnt[1];
    for(let i = m; i >= zeros; i--) {
      for(let j = n; j >= ones; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1);
      }
    }
  }
  console.log(dp[m][n])
  return dp[m][n];
}

let strs = ["10", "0001", "111001", "1", "0"];
let m = 5;
let n = 3;

findMaxForm(strs, m, n);