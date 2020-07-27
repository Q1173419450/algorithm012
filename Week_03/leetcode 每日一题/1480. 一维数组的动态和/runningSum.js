/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var runningSum = function(nums) {
//     for(let i = 1; i < nums.length; i++) {
//         nums[i] = nums[i] + nums[i - 1];
//     }
//     return nums
// };

var runningSum = function (nums) {
  let arr = [];
  let sum = nums[0];
  arr.push(nums[0])

  for (let i = 1; i < nums.length; i++) {
      sum += nums[i]
      arr.push(sum);
  }

  return arr;
}