/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function(coins, amount) {
//     let count = dp(coins, amount);

//     return count;
// };

// var dp = function(coins, amount) {
//     if (amount == 0) return 0;
//     if (amount < 0) return -1;

//     let count = Infinity;

//     for(let coin in coins) {
//         let subproblem = dp(coins, amount - coins[coin]);

//         if (subproblem == -1) continue;

//         count = Math.min(count, 1 + subproblem);
//     }

//     return count != Infinity ? count : -1
// }

var coinChange = function(coins, amount) {
    let memo = new Map();

    return dfs(coins, amount, memo);
}

var dfs = function(coins, amount, memo) {
    let res = Infinity;

    if (amount == 0) return 0;  // end case

    if (memo.has(amount)) return memo.get(amount);  // 备忘录

    for(let coin in coins) {
        if(amount - coin < 0) { 
            break;
        }
        let subPro = dfs(coins, amount - coins[coin], memo);    // 递归下一层
        if (subPro === -1) continue;

        res = Math.min(res, 1 + subPro);    // 处理当前逻辑
    }

    memo.set(amount, (res === Infinity) ? -1 : res);

    return res === Infinity ? -1 : res;
}

console.log(coinChange([1, 2, 5], 11));