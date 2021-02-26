/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let charArr = new Array(58).fill(0);
  for(let char of s) {
    charArr[char.charCodeAt() - 65] += 1;
  }

  let max = 0;
  for(let char of charArr) {
    max = Math.floor(char / 2) * 2;
  }
  return max < s.length ? max + 1 : max;
};