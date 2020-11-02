/**
 * @param {string} s
 * @return {string}
 */
/* 正向思维 */
var decodeString = function(s) {
  let strStack = [];
  let numStack = [];
  let str = '';
  let num = 0;

  for(let char of s) {
    if (!isNaN(char)) {
      num = num * 10 + Number(char);
    } else if(char === '[') {
      numStack.push(num);
      strStack.push(str);
      str = '';
      num = '';
    } else if (char === ']') {
      let curNode = numStack.pop();
      str = strStack.pop() + str.repeat(curNode);
    } else {
      str += char;
    }
  }

  return str;
};