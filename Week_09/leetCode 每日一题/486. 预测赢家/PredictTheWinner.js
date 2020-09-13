/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
  let len = nums.length;
  let memo = new Array(len);
  for(let i = 0; i < len; i++) {
      memo[i] = new Array(len).fill(0);
  }
  
  return helper(0, n - 1, nums, memo) >= 0;
};

function helper(left, right, nums, memo) {
    if (memo[left][right] != 0) {   // 若已经搜索过了，则直接使用
        return memo[left][right];
    }

    if (left == right) {    // 最后一个数
        memo[left][right] = nums[left];
        return nums[left];
    }

    let pickLeft = nums[left] - helper(left + 1, right, nums, memo);    // 玩家1
    let pickRight = nums[right] - helper(left, right - 1, nums, memo);  // 玩家2
    memo[left][right] = Math.max(pickLeft, pickRight);  // 比大小

    return memo[left][right];
}

/* 动态规划 */
// var PredictTheWinner = function(nums) {
//     let len = nums.length;

//     let dp = new Array(len);
//     for(let i = 0; i < len; i++) {
//         dp[i] = new Array(len).fill(0);
//     }

//     for(let i = 0; i < len; i++) {
//         dp[i][i] = nums[i];
//     }

//     for(let left = len - 1; left >= 0; left--) {
//         for(let right = left + 1; right < len; right++) {
//             let pickLeft = nums[left] - dp[left + 1, right];    // 玩家1
//             let pickRight = nums[right] - dp[left, right - 1];  // 玩家2
//             dp[left][right] = Math.max(pickLeft, pickRight);
//         }
//     }

//     return dp[0][len - 1] >= 0;
// }


console.log(PredictTheWinner([1, 5, 233, 7]))