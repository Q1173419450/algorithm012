/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let ans = '';
  let level = 0
  for (let s of S) {
    if (s == ')') level--;
    if (level >= 1) ans += s;
    if (s == '(') level++;
  }
  console.log(ans.toString())
  return ans.toString();
};

// removeOuterParentheses('(()())(())(()(()))')
removeOuterParentheses('()()')