/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/* 暴力 */
var isSubsequence = function(s, t) {
  s = s.split('');
  t = t.split('');
  let i = 0;
  let j = 0;
  while(j < t.length && i < s.length) {
    if (s[i] == t[j]) {
      i++;
    }
    j++;
  }

  console.log(i)
  return s.length == i;
};

/* 动态规划 */

/* 正则 */

console.log(isSubsequence("abc", "ahbgdc"))