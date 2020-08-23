/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 时间复杂度 O(n^2)
// 空间复杂度 O(n^2)
/* 无障碍物 */
var uniquePaths = function(m, n) {
    let table = []; // 初始化二维数组
    for(let k = 0; k < m; k++) {
        table[k] = new Array();
        for(let j = 0; j < n; j++) {
            table[k][j] = 1
        }
    }

    console.log(table);
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            table[i][j] = table[i - 1][j] + table[i][j - 1];
        }
    }

    return table[m - 1][n - 1];
};

console.log(uniquePaths(3, 2))