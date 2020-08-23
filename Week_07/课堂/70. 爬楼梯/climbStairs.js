/**
 * @param {number} n
 * @return {number}
 */
/* 动态规划 */
var climbStairs = function(n) {
    let sum = 0;
    let cur = 1;
    let next = 1;
    for(let i = 0; i < n; i++) {
        sum = cur + next;
        cur = next;
        next = sum
    }

    return cur;
};

var climbStairs = function(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    let dp = new Array(n);
    dp[0] = 1;
    dp[1] = 1;

    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i -2];
    }

    return dp[n];
}

console.log(climbStairs(4));