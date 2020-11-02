var generateParenthesis = function(n) {
  let res = [];
  dfs(n, n, '', res);
  return res
}

var dfs = function(left, right, temp, res) {
  if (left == 0 && right == 0) {
    res.push(temp);
  }

  if (left < res) return

  left > 0 && dfs(left - 1, right, temp + '(', res);
  right > 0 && dfs(left, right - 1, temp + ')', res);
}