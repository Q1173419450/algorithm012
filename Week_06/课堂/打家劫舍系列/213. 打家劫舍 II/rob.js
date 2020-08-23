var rob = function(nums) {
    if (nums.length <= 1) {
        return nums[0] ? nums[0] : 0;
    }

    let dp = [];
    for(let i = 0; i < nums.length; i++) {
        dp[i] = [];
    }

    dp[0][1] = nums[0];
    dp[0][0] = 0;
    dp[1][1] = nums[0];
    dp[1][0] = nums[1];
    
    let max = Math.max(dp[1][0], dp[1][1]);

    for(let i = 2; i < nums.length; i++) {
        dp[i][0] = 0;
        dp[i][1] = 0;
        if (i < nums.length - 1) {
            dp[i][0] = Math.max(dp[i - 1][0], dp[i - 2][0] + nums[i]);
            dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][1] + nums[i]);
        } else {
            dp[i][0] = Math.max(dp[i - 1][0], dp[i - 2][0] + nums[i]);
            dp[i][1] = dp[i - 1];
        }
        max = Math.max(max, Math.max(dp[i][0], dp[i][1]));
    }

    return max;
}

/* 优化空间 */
var rob = function(nums) {
    if (nums.length <= 1) {
        return nums[0] ? nums[0] : 0;
    }

    let need1 = dp(nums.slice(1));
    let need2 = dp(nums.slice(0, nums.length - 1));

    return Math.max(need1, need2);
}

function dp(nums) {
    let preMax = 0;
    let currMax = 0;

    for(let i = 0; i < nums.length; i++) {
        let temp = currMax;
        currMax = Math.max(currMax, preMax + nums[i]);
        preMax = temp;
    }
    return currMax;
}