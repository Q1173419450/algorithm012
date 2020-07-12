/* 
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

是否有重复，是否可以包含重复，顺序不一致可否可以
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b);  // 排序
  let arr = [];
  for (let i = 0; i < nums.length; i++) { // O(n)
    if (nums[i] > 0) break; // 如果 nums[i]nums[i]大于 00，则三数之和必然无法等于 0

    if (i > 0 && nums[i] == nums[i - 1]) continue;  // 如果 nums[i]nums[i] == nums[i-1]nums[i−1]，则说明该数字重复，会导致结果重复，所以应该跳过

    let L = i + 1;  // 左指针
    let R = nums.length - 1;  // 右指针  
    while(L < R) {  // O(n)
      const sum = nums[i] + nums[L] + nums[R];
      if (sum == 0) {

        arr.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] == nums[L + 1]) L++;  // 当 sumsum == 00 时，nums[L]nums[L] == nums[L+1]nums[L+1] 则会导致结果重复，应该跳过  O(1)
        while (L < R && nums[R] == nums[R - 1]) R--;  // 当 sumsum == 00 时，nums[R]nums[R] == nums[R-1]nums[R−1] 则会导致结果重复，应该跳过  O(1)

        L++
        R--
      } else if (sum < 0) {
        L++
      } else {
        R--
      }
    }
  }
  return arr
};

let res = threeSum([-1, 0, 1, 2, -1, -4])
console.log(res)