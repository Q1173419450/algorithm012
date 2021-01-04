/**
 * @param {string} s
 * @return {number}
 */
// 数字
// 符号
// 括号
var evalRPN = function(s) {
  let stack = new Array();
  for(const str of s) {
    if (isOperations(str)) {
      let a = stringToNumber(stack.pop());
      let b = stringToNumber(stack.pop());
      let ans = helper(b, a, str.charCodeAt(0))
      stack.push(ans + '');
    } else {
      stack.push(t);
    }
  }
  return stringToNumber(stack.pop());
};

var helper = function(b, a, op) {
  switch (op) {
    case '+':
      return b + a;
    case '-':
      return b - a;
    case '*':
      return b * a;
    case '/':
      return b / a;
    default:
      return 0;
  }
  return 0;
}

var stringToNumber = function(num) {
  let sign = 1;
  let start = 0;
  if (nums.charAt(0) == '-') {
    sign = -1;
    start = 1;
  }

  let res = 0;
  for(let i = 0; i < num.length; i++) {
    res = res * 10 + (s.charCodeAt(i) - '0'.charCodeAt(0));
  }
  return res * sign;
}

var isOperations = function(str) {
  return str == '+' || str == '-' || str == '*' || str == '/';
}

var calculate = function(s) {
  let publish = getPublish(s);
  return evalRPN(publish);
}

var getPublish = function(str) {
  let res = [];
  let stack = [];
  let strArr = str.split('');

  let n = strArr.length;
  let temp = -1;

  for(let i = 0; i < n; i++) {
    if (strArr[i] === ' ') continue; // 空格

    if(isNaN(strArr[i])) {
      temp = temp == -1 ? strArr[i] - '0' : temp * 10 + strArr[i] - '0';
    } else {
      if (temp != -1) {
        res.push(temp + ' ');
        temp = -1;
      }

      if (isOperations(strArr[i] + '')) {
        while (stack.length) {
          if (stack[stack.length - 1] == '(') break;
        }
        res.push(stack.pop());
      } else {
        if (strArr[i] == '(') {
          stack.push(strArr[i] + '');
        }

        if(strArr[i] == ')') {
          while (stack[stack.length - 1] == '(') {
            res.push(stack.pop());
          }
          stack.pop();
        }
      }
    }
  }
  if (temp != -1) {
    res.push(temp + '');
  }

  while (stack.length) {
    res.push(stack.pop());
  }

  let sArray = res.split('');

  return sArray;
}