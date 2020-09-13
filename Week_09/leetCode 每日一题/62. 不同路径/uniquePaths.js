/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
/* 
    动态规划
    假设所有步数我们都知道，那么最终的步数为：dp[i][j] = dp[i-1][j] + dp[i][j - 1]; 也就是到达终点时，最大步数为当前位置左边和上边的步数相加。
    注意：确认边界：我们发现当 i = 0，j = 0 时，上面的动态方程是会越界的，所有我们将开始位置的 左一列 和 上一行 置为1，因为只能一直往下走或者往左走。（我这里将 dp 数组全部置为1 也是同理）

    时间复杂度 O(n^2)
    空间复杂度 O(n^2)
*/

var uniquePaths = function(m, n) {
    // 初始化一个二维数组
    let dp = new Array(m).fill(1);
    for(let i = 0; i < dp.length; i++) {
        dp[i] = new Array(n).fill(1)
    }

    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m - 1][j - 1];
};

/* 
    
    空间优化
    我们发现可以不需要 N 平方的空间来计算步数，将空间压缩成一列，根据当前层级进行累加覆盖即可，具体还需要自己画图或者debug 才能看出
*/
var uniquePaths = function(m, n) {
    let dp = new Array(n).fill(1);
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            dp[j] += dp[j - 1];
        }
    }
    return dp[n - 1];
}

console.log(uniquePaths(4, 3));