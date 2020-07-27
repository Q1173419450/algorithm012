/**
 * @param {number} n
 * @return {string[]}
 */

/* 
  回溯 + 递归 + 剪枝 从 n 开始回溯
  时间：O(N)
  空间：O(N)
*/
var generateParenthesis = function(n) {
  let res = [];
  if (n === 0) return res;
  dfs('', n, n, res)

  return res
};

let dfs = function(curStr, left, right, res) {
  if (left == 0 && right == 0) {
    res.push(curStr);
    return
  }

  if (left > right) {
    return
  }

  if (left > 0) {
    dfs(curStr + '(', left - 1, right, res);
  }

  if (right > 0) {
    dfs(curStr + ')', left, right - 1, res);
  }
}

/* 从 0 开始回溯 */
var generateParenthesis = function(n) {
  let res = [];
  if (n === 0) return res;

  return dfs('', 0, 0, n, res);
}

var dfs = function(curStr, left, right, n, res) {
  if (left == n && right == n) {
    res.push(curStr);
    return
  }

  if (left < right) {
    return
  }

  if (left < n) {
    dfs(curStr + ')', left + 1, right, res);
  }

  if (right < n) {
    dfs(curStr + '(', left, right + 1, res);
  }
}