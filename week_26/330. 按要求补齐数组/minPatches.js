/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
  let i = 0, count = 0;
  let add = 1;
  while (add <= n) {
    if(i < nums.length && nums[i] <= add){
      add += nums[i++]
    } else {
      add += add;
      count++
    }
  }
  return count;
};

let res = minPatches([1, 5, 10], 20);
console.log(res);