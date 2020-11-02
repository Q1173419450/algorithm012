/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let len = arr.length;
  arr.sort((a, b) => a - b);
  let memo = {};
  for(let i = 0; i < len; i++) {
    memo[arr[i]] = (memo[arr[i]] || 1) + 1
  }
  let set = new Set();
  for(const [key, value] of memo) {
    set.add(value);
  }

  return memo.size === set.size;
};