/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  let len = coins.length;
  if (len == 0) {
    if (amount == 0) return 1;
    return 0
  }
  let dp = Array.from({length: len}, () => new Array(amount + 1));
  dp[0][0] = 1;

  for(let i = coins[0]; i <= amount; i += coins[0]) {
    dp[0][i] = 1;
  }

  for(let i = 1; i < len; i++) {
    for(let j = 0; j <= amount; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j - coins[i] >= 0) {
        dp[i][j] += dp[i][j - coins[i]];
      }
    }
  }
  return dp[len - 1][amount];
};