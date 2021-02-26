/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/* 最接近的意思就是差值最小 */
// var threeSumClosest = function(nums, target) {
//   nums = nums.sort((a, b) => a - b);
//   let ans = Infinity;
//   for(let i = 0; i < nums.length; i++) {
//     let left = i + 1;
//     let right = nums.length - 1;

//     while (left < right) {
//       // 判断最小差值
//       if (nums[i] + nums[left] + nums[right] - target < ans) {
//         ans = nums[i] + nums[left] + nums[right];
//       }
//       left++;
//       right--;
//     }
//   }
//   return ans;
// };

var threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => a - b);
  let ans = nums[0] + nums[1] + nums[2];

  for(let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      /* 差值的绝对值最小 */
      if (Math.abs(target - sum) < Math.abs(target - ans)) {
        ans = sum
      }

      if(sum > target) {
        right--
      } else if (sum < target) {
        left++
      } else {
        return ans;
      }
    }
  }
  return ans;
}