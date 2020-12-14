/**
 * @param {string} s
 * @return {string}
 */
/* 
要求一、要去重。
要求二、去重字符串中的字符顺序不能打乱 s 中字符出现的相对顺序。
要求三、在所有符合上一条要求的去重字符串中，字典序最小的作为最终结果。
*/
var removeDuplicateLetters = function(s) {
  let stack = [];
  let count = new Array(256).fill(0);
  for(let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i)]++;   // 计算字符重复数
  }

  let inStack = new Array(256).fill(false);
  for(let i = 0; i < s.length; i++) {
    let c = s.charCodeAt(i);
    count[c]--

    if (inStack[c]) continue;

    while (stack.length > 0 && stack[stack.length - 1] > c) {   // 当 c 小于 最后一个栈的字母时
      // 判断最后一个栈的字母如果等于0的话则不需要移出 
      if (count[stack[stack.length - 1]] == 0) break;

      // 否则就要将最后一个字母移出，塞入较小的数，满足题意
      inStack[stack.pop()] = false;
    }
    stack.push(c);
    inStack[c] = true;
  }

  let sb = [];
  while (stack.length) {
    let num = String.fromCharCode(stack.shift())
    sb.push(num)
  }

  return sb.length ? sb.join('') : ''
};