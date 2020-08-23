/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];

    if (n == 0) {
        return res;
    }

    dfs('', n, n, res);
    return res;
};

var dfs = (curStr, left, right, res) => {
    if(left == 0 && right === 0) {
        res.push(curStr);
        return;
    }

    if (left > right) {
        return;
    }

    if (left > 0) {
        dfs(curStr + '(', left - 1, right, res);
    }

    if (right > 0) {
        dfs(curStr + ')', left, right - 1, res);
    }
}