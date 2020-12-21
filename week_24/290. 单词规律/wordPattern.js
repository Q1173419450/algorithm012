/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  let str = s.split(' ');
  if (pattern.length != str.length) return false;

  for(let i = 0; i < pattern.length; i++) {
    // 找到对应索引的下标
    if (pattern.indexOf(pattern[i]) != str.indexOf(str[i])) return false;
  }

  return true;
};