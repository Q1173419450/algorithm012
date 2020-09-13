/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let res = [];
    let path = [];

    dfs(k, n, 1, path, res);

    return res;
};

function dfs(k, n, start, path, res) {
    if (n < 0) {
        return;
    }

    if (k == 0) {
        if (n == 0) {
            res.push(path.slice());
            return
        }
        return
    }

    for(let i = start; i <= 9; i++) {
        path.push(i);
        dfs(k - 1, n - i, i + 1, path, res);

        path.pop();
    }
}