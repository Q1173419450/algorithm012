/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
  let ans = [], left = 0 ,right = 0;

  for(const i of s) {   // 判断有多少多余的括号
    if (i == '(') left++
    if (i == ')') left > 0 ? left-- : right++;
  }
  dfs(s, 0, left, right, ans);
  return ans
};

var dfs = (s, start, left, right, ans) => {
  if (left === 0 && right === 0) {
    if (check(s)) {
      ans.push(s);
    }
    return
  }

  for(let i = start; i < s.length; i++) {
    if (i - 1 >= start && s[i] == s[i - 1]) continue;
    if (left > 0 && s[i] == '(') dfs(s.substr(0, i) + s.substr(i + 1), i, left - 1, right, ans);
    if (right > 0 && s[i] == ')') dfs(s.substr(0, i) + s.substr(i + 1), i, left, right - 1, ans);
  }
}

var check = (s) => {
  let cnt = 0;
  for(const i of s) {
    if (i == '(') cnt++
    if (i == ')') {
      cnt--;
      if (cnt < 0) return false;
    }
  }
  return cnt == 0;
}
