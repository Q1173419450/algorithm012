/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0) {
        return 0
    }

    let n = nums.length;

    let dp = new Array(n + 1).fill(0);

    dp[0] = 0;
    dp[1] = nums[0];

    for(let i = 2; i <= n; i++) {
        dp[i] = Math.max(dp[i - 1], nums[i - 1] + dp[i - 2])
    }

    return dp[n];
};

var rob = function(nums) {
    let prev = 0;
    let curr = 0;

    for(let i = 0; i < nums.length; i++) {
        let temp = Math.max(curr, prev + nums[i]);
        console.log(curr, prev, i)
        prev = curr;
        curr = temp;
    }

    return curr
}

console.log(rob([1,2,3,1]))