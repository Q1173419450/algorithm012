/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var getNext = function (next, s) {
  let j = 0;
  next[0] = 0;

  for(let i = 1; i < s.length; i++) {
    while (j > 0 && s[i] != s[j]) { // 不相等时?
      j = next[j - 1];
    }

    if (s[i] == s[j]) j++;  // 前后缀相等则 j + 1
    next[i] = j;
  }
}

var strStr = function(haystack, needle) {
  if (needle.length == 0) return 0;

  let next = new Array(needle.length);
  getNext(next, needle)

  let j = 0;
  for(let i = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] != needle[j]) { // 不相等时回退多少格
      j = next[j - 1];
    }
    if (haystack[i] == needle[j]) j++;  // 匹配
    if (j == needle.length) return (i - needle.length + 1); // 匹配上了
  }
  return -1;
};