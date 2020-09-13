/**
 * @param {number[]} nums
 * @return {number}
 */
/* 求最值 动态规划 */
var lengthOfLIS = function(nums) {
    let len = nums.length;
    if (len === 0) return 0;

    let dp = new Array(len).fill(1);
    let res = 0;

    for(let i = 0; i < len; i++) {
        for(let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {    // j 为前一个元素、i 为当前元素
                // 如果是跳跃着的，可能累加的升序长度比当前的长，所以需要比较下取最大值
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        res = Math.max(res, dp[i]);
    }

    return res;
};

/* 动态 + 双指针 */
var lengthOfLIS = function(nums) {
    let len = nums.length;
    if (len === 0) return 0;

    let dp = new Array(len).fill(0);
    let res = 0;

    for(let num of nums) {
        let left = 0;
        let right = res;
        while(left < right) {
            let mid = Math.floor(left + (right - left) / 2);
            if (dp[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        dp[left] = num;
        if (res == right) res++; 
    }
    return res;
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]))