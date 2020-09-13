/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices == []) return 0;

    let len = prices.length;
    let maxTime = 2;

    let dp = Array.from(new Array(len), () => new Array(maxTime + 1));
    for(let i = 0; i < len; i++) {
        for(let r = 0; r <= maxTime; r++) {
            dp[i][r] = new Array(2).fill(0);
        }
    }
    console.log(dp);

    for(let i = 0; i < len; i++) {
        for(let k = maxTime; k >= 1; k--) {
            if (i == 0) {
                dp[i][k][0] = 0;
                dp[i][k][1] = -prices[i];

                continue;
            }
            dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
            dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])
        }
    }

    return dp[len - 1][maxTime][0];
};