/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

/* 双指针 */
/* a遍历O(N) 里嵌套b遍历O(N) 再嵌套c,d双指针O(N)--> O(N^3) */
var fourSum = function(nums, target) {
  nums = nums.sort((a, b) => a - b);

  let len = nums.length;
  let arr = [];

  for(let i = 0; i <= len - 4; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    for(let j = i + 1; j <= len - 3; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;
      let a = j + 1
      let b = len - 1;

      while(a < b) {
        if (nums[i] + nums[j] + nums[a] + nums[b] < target) {
          a++
        } else if (nums[i] + nums[j] + nums[a] + nums[b] > target) {
          b--
        } else {
          arr.push([nums[i], nums[j], nums[a], nums[b]]);
          while(a < b && nums[a + 1] === nums[a]) 
            a++;
          while(a < b && nums[b - 1] === nums[b])
            b--;
          a++;
          b--;
        }
      }
    }
  }

  return arr;
};

// let res = fourSum([1, 0, -1, 0, -2, 2], 0);
console.log(fourSum([0,0,0,0], 0))
// console.log(res)