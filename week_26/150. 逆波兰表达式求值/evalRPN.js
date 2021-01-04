/**
 * @param {string[]} tokens
 * @return {number}
 */
/* 
  https://baike.baidu.com/item/%E9%80%86%E6%B3%A2%E5%85%B0%E5%BC%8F/128437
  什么是逆波兰表达式？
  逆波兰表达式也叫后缀表达式，将一个表达式解析成计算机能够理解的内容。
  如：a + b => ab+

  为什么，解决了什么问题？
  怎么用？
  底层？
*/

/* 数组 */
var evalRPN = function (tokens) {
  let stack = new Array(tokens.length / 2 + 1);
  let index = 0;
  for (const s of tokens) {
    switch (s) {
      case '+':
        stack[index - 2] += stack[--index];
        break;
      case '-':
        stack[index - 2] -= stack[--index];
        break;
      case '*':
        stack[index - 2] *= stack[--index];
        break;
      case '/':
        stack[index - 2] = parseInt(stack[index - 2] / stack[--index], 10);
        break;
      default:
        stack[index++] = parseInt(s, 10);
        break;
    }
  }

  console.log(stack);
  return stack[0];
};

/* 栈 */
var evalRPN = function (tokens) {
  let stack = [];
  let op1, op2;
  for (const s of tokens) {
    switch (s) {
      case '+':
        op2 = stack.pop();
        op1 = stack.pop();
        stack.push(op1 + op2);
        break;
      case '-':
        op2 = stack.pop();
        op1 = stack.pop();
        stack.push(op1 - op2);
        break;
      case '*':
        op2 = stack.pop();
        op1 = stack.pop();
        stack.push(op1 * op2);
        break;
      case '/':
        op2 = stack.pop();
        op1 = stack.pop();
        stack.push(op1 / op2);
        break;
      default:
        stack.push(parseInt(s));
        break;
    }
  }
  return stack.pop();
}