/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  let map = new Map();
  for(let num of nums) {
    if (map.has(num)) {
      return num;
    } else {
      map.set(num, 1)
    }
  }
  return -1;
};