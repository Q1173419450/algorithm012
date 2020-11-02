// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubArray = function(nums) {
//   let ans = nums[0];
//   let sum = 0;
//   for(let num of nums) {
//     if (sum > 0) {
//       sum += num
//     } else {
//       sum = num
//     }
//     ans = Math.max(ans, sum);
//   }
//   return ans;
// };

/* 分治算法 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  return maxSubArrayHelper(nums, left, right);
}

var maxSubArrayHelper = function(nums, left, right) {
  if (left === right) {
    return nums[left]
  }

  let mid = Math.floor((left + right)/2);

  let leftNum = maxSubArrayHelper(nums, left, mid); //最大子序列要么在左边
  let rightNum = maxSubArrayHelper(nums, mid + 1, right); // 要么右边
  let midNum = findMaxCrossingSubarray(nums, left, mid, right); // 中间

  return Math.max(leftNum, rightNum, midNum);
}

var findMaxCrossingSubarray = function(nums, left, mid, right) {
  let leftNum = -Number.MAX_VALUE;
  
  let leftSum = 0;

  for(let i = mid; i >= left; i--) {
    leftSum += nums[i];
    leftNum = Math.max(leftNum, leftSum);
  }

  let rightNum = -Number.MAX_VALUE;
  let rightSum = 0;
  for(let j = mid + 1; j <= right; j++) {
    rightSum += nums[j];
    rightNum = Math.max(rightNum, rightSum);
  }

  console.log(left, rightNum)

  return (leftNum + rightNum)
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))