/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let len = s.length;
  let ans = 0;
  let map = new Map();
  let start = 0;
  for(let i = 0; i < len; i++) {
    if(map.has(s[i])) {
      start = Math.max(start, map.get(s[i]) + 1);
    }
    // console.log(start);
    map.set(s[i], i);
    ans = Math.max(ans, i - start + 1);
  }

  return ans;
};

let str = 'abcabcbb'
console.log(lengthOfLongestSubstring(str))  
