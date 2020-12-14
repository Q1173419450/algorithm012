/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
  let nc = new Map();

  for(let num of nums) {
    let value = nc.get(num) || 0;
    nc.set(num, value + 1);
  }

  while (nums.length > 0) {
    let count = 0;
    let prev_key = -Infinity;
    let prev_count = 0;
    for(let [key, value] of nc) {
      if (value == 0 && count == 0) continue;

      if (prev_key != -Infinity && prev_key + 1 != key) break;
      if (value < prev_count) break;

      prev_count = value;
      prev_key = key;

      nc.set(key, value - 1);
      nums.pop();
      count++
    }
    if (count < 3) return false;
  }
  return true;
};

let count = isPossible([1,2,3,3,4,4,5,5])
console.log(count);