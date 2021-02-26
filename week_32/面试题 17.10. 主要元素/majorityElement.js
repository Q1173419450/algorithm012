/**
 * @param {number[]} nums
 * @return {number}
 */
/* 摩尔投票法 */
var majorityElement = function(nums) {
  let size = nums.length;
  let cut = 0, major;
  for(let n of nums) {
    if (cut == 0) {
      major = n;
      cut++;
    } else {
      if (major == n) {
        cut++
      } else {
        cut--;
      }
    }
  }

  let C = 0;
  for(const n of nums) {
    if (major == n) C++
  }
  if (C <= size / 2 | 0) major = -1;
  return major;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
/* 位运算 */
var majorityElement = function(nums) {
  let ans = 0;
  let n = nums.length;
  for(let i = 0; i < 32; i++) {
    let cnt = 0;
    for(let j = 0; j < n; j++) {
        console.log(nums[j], i);
      if (nums[j] & (1 << i)) cnt++;
    }
    if (cnt > Math.floor(n / 2)) ans ^= (1 << i);
  }
  let C = 0;
  for(let i = 0; i < n; i++) {
    if (nums[i] == ans) C++;
  }
  if (C <= Math.floor(n / 2)) ans = -1;
  return ans;
}

majorityElement([3,2,3]);