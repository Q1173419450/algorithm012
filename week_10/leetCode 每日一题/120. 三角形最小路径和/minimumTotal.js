/**
 * @param {number[][]} triangle
 * @return {number}
 */
/* 暴力递归 */
var minimumTotal = function(triangle) {
    return dfs(triangle, 0, 0);
}

var dfs = (triangle, i, j) => {
    if (i == triangle.length) {
        return 0;
    }

    return Math.min(dfs(triangle, i + 1, j), dfs(triangle, i, j + 1)) + triangle[i][j];
}

/* 记忆化搜素 */
var minimumTotal = function(triangle) {
    let memo = new Array(triangle.length);
    for(let i = 0; i < triangle.length; i++) {
        memo[i] = new Array(triangle.length).fill(0);
    }

    return dfs(triangle, 0, 0, memo);
}

var dfs = (triangle, i, j, memo) => {
    console.log(i)
    if (i === triangle.length) {
        return 0
    }

    if (memo[i][j] != null) {
        return memo[i][j];
    }

    return memo[i][j] = Math.min(dfs(triangle, i + 1, j, memo), dfs(triangle, i + 1, j + 1, memo)) + triangle[i][j];
}

/* dp 动态规划 */
