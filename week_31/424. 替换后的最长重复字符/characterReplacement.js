/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let chars = s.split('');
  let left = 0;
  let map = new Array(26).fill(0);

  let historyCharMax = 0;
  for(let right = 0; right < chars.length; right++) { // 窗口无论无何都要扩张
    let index = chars[right].charCodeAt() - 'A'.charCodeAt();
    map[index]++;
    historyCharMax = Math.max(historyCharMax, map[index]);
    if (right - left + 1 > historyCharMax + k) {
      map[chars[left].charCodeAt() - 'A'.charCodeAt()]--;
      left++; // 窗口滑动
    }
  }
  return chars.length - left;
};