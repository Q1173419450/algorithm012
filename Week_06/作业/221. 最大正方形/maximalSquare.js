/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(s) {
    if (s == null || s.length === 0) return 0;

    let height = s.length;
    let width = s[0].length;
    let maxSide = 0;

    let dp = [];
    for(let i = 0; i < height + 1; i++) {
        dp[i] = new Array(width + 1).fill(0);
    }

    console.log(dp);    // 构造二维数组
    
    for(let i = 1; i < height + 1; i++) {
        for(let j = 1; j < width + 1; j++) {
            if (s[i - 1][j - 1] === '1') {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;  // 木桶效应
                maxSide = Math.max(maxSide, dp[i][j]);
            }
        }
    }

    return maxSide * maxSide
};