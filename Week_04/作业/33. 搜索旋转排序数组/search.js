/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 0) {
    return -1;
  }
  let left = 0;
  let right = nums.length - 1;

  while(left < right) {
    let mid = Math.floor(left + (right - left + 1) / 2);

    if (nums[mid] < nums[right]) {
      if(nums[mid] <= target && target <= nums[right]) {
        left = mid;
      } else {  // nums[mid] > target && target > nums[right]
        right = mid - 1;
      }
    } else {
      if (nums[left] <= target && target <= nums[mid - 1]) {
        // 下一轮搜索区间是 [left, mid - 1]
        right = mid - 1;
      } else {
          // 下一轮搜索区间是 [mid, right]
          left = mid;
      }
    }
  }

  if(nums[left] === target) {
    return left
  }

  return -1
};

console.log(search([5,1,3], 1));
console.log(search([4,5,6,7,0,1,2], 0));
