/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
/* 有障碍物 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid == null || obstacleGrid.length == 0) {
        return 0;
    }

    let m = obstacleGrid.length, n = obstacleGrid[0].length;
    let dp = new Array(m).fill(0);
    for(let i = 0; i < m; i++) dp[i] = new Array(n).fill(0);

    for(let i = 0; i < m && obstacleGrid[i][0] == 0; i++) {
        dp[i][0] = 1;
    }

    for(let i = 0; i < n && obstacleGrid[0][j] == 0; i++) {
        dp[0][i] = 1;
    }

    console.log(dp);

    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] == 0) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }

    return dp[m - 1][n - 1];
};

let arr = [
    [0,0,0],
    [0,1,0],
    [0,0,0]
]

console.log(uniquePathsWithObstacles(arr))