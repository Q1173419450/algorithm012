/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  let stack = [];
  let res = '';
  let chs = s.split('');

  for(let i = 0; i < chs.length; i++) {
    if (chs[i] == '(') {
      stack.push(i);
    } else if (chs[i] == ')') {
      reverse(chs, stack.pop() + 1, i - 1);
    }
  }

  for(let ch of chs) {
    if (ch != '(' && ch != ')') {
      res += ch;
    }
  }

  return res;
};

var reverse = (chs, start, end) => {
  while (start < end) {
    let temp = chs[end];
    chs[end] = chs[start];
    chs[start] = temp;

    start++;
    end--;
  }
}