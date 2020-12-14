/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
/* 
  超时
*/
var superEggDrop = function(K, N) {
  let dp = new Array(N + 1);

  for(let i = 0; i <= N; i++) {
    dp[i] = new Array(K + 1).fill(i);
  }

  for(let j = 0; j <=K; j++) {
    dp[0][j] = 0;
  }

  /* 不管多少个蛋，在1楼都是1 */
  for(let j = 1; j <= K; j++) {
    dp[1][j] = 1;
  }

  for(let i = 0; i <= N; i++) {
    dp[i][0] = 0;
    dp[i][1] = i;
  }

  for(let i = 2; i <= N; i++) {
    for(let j = 2; j <= K; j++) {
      for(let k = 1; k <= i; k++) {
        dp[i][j] = Math.min(dp[i][j], Math.max(dp[k - 1][j - 1], dp[i - k][j]) + 1);
      }
    }
  }

  return dp[N][K];
};

var superEggDrop = function (K, N) {
  // 不选择dp[K][M]的原因是dp[M][K]可以简化操作
  const dp = Array(N + 1)
    .fill(0)
    .map((_) => Array(K + 1).fill(0));

  let m = 0;
  while (dp[m][K] < N) {
    m++;
    for (let k = 1; k <= K; ++k) dp[m][k] = dp[m - 1][k - 1] + 1 + dp[m - 1][k];
  }
  return m;
};