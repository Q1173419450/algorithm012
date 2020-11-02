/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
/* 位运算 */
/* 通过计算俩个字母的总ASCii值, 相减后得到最终值 */
var findTheDifference = function(s, t) {
  let left = t.split('').reduce((acc, item) => {acc + item.charCodeAt()}, 0)
  let right = s.split('').reduce((acc, item) => acc + item.charCodeAt(), 0)

  return String.fromCharCode(left - right);
};

var findTheDifference = function(s, t) {
  return String.fromCharCode((s + t).split('').reduce((acc, item) => acc ^ item.charCodeAt(), 0));
};

findTheDifference('abcd', 'abcde');