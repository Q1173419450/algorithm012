/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

  let pos = nums.length - 1;

  for(let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] + i >= pos) {
      pos = i;
    }
  }

  return pos === 0;
};

var canJump = function(nums) {
  let k = 0;
  for(let i = 0; i < nums.length; i++) {
    if (i > k) return false;
    k = Math.max(k, i + nums[i]);
  }

  return true;
}

console.log(canJump([2,3,1,1,4]));