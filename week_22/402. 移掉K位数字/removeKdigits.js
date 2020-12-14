/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
/* 
  这里有一个前置知识：对于两个数 123a456 和 123b456，如果 a > b， 
  那么数字 123a456 大于 数字 123b456，否则数字 123a456 小于等于数字 123b456。
  也就说，两个相同位数的数字大小关系取决于第一个不同的数的大小。
  单调栈思路：
    如果 num 是单调递增的，则删除最小位
    如果 num 是单调递减的，则删除高位
*/
var removeKdigits = function(num, k) {
  let stack = [];
  for(let i = 0; i < num.length; i++) {
    const c = num[i];
    while (k > 0 && stack.length && stack[stack.length - 1] > c) {  // 单调递减就直接替换
      stack.pop();
      k--;
    }
    if (c !== '0' || stack.length != 0) {
      stack.push(c);
    } 
  }

  while (k > 0) { // 单调递增就删除最后几个数
    stack.pop();
    k--;
  }
  return stack.length == 0 ? '0' : stack.join('');
};