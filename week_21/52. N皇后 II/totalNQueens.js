/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let res = new Array(n);
  let count = 0;
  
  var dfs = (start, n) => {
    if (start === n) {
      count++
      return;
    }
  
    for(let i = 0; i < n; i++) {
      res[start] = i;
      if (!check(start, res)) {
        dfs(start + 1, n);
      }
    }
  }

   dfs(0, n, res, count);
   return count
};

var check = (k, res) => {
  for(let i = 0; i < k; i++) {
    if (res[k] == res[i] || Math.abs(k - i) == Math.abs(res[k] - res[i])) {
      return true
    }
  }

  return false
}