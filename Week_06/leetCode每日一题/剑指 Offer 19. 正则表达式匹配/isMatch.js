/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(source, pattern) {
    let n = source.length;
    let m = pattern.length;

    let table = []; // 初始化二维数组
    for(let k = 0; k < source.length + 1; k++) {
        table[k] = new Array();
        for(let j = 0; j < pattern.length + 1; j++) {
            table[k][j] = false
        }
    }

    for(let i = 0; i <= n; i++) {
        for(let j = 0; j <= m; j++) {
            if (j == 0) {   //分成空正则和非空正则两种
                f[i][j] = i == 0;
            } else {
                //非空正则分为两种情况 * 和 非*
                if (pattern.charAt(j - 1) != '*') {
                    if (i > 0 && (source.charAt(i - 1) == pattern.charAt(j - 1) || pattern.charAt(j - 1) == '.')) {
                        f[i][j] = f[i - 1][j - 1];
                    }
                } else {
                    if (j >= 2) {   // 不看
                        f[i][j] |= f[i][j - 2];
                    }
                    //看
                    if (i >= 1 && j >= 2 && (source.charAt(i - 1) == pattern.charAt(j - 2) || pattern.charAt(j - 2) == '.')) {
                        f[i][j] |= f[i - 1][j]
                    }
                }
            }
        }
    }
    return f[n][m]
}