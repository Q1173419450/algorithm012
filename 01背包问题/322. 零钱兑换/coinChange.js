/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if(amount == 0) return 0;
  coins.sort((a, b) => a - b);
  let ans = Infinity;
  helper(coins, amount, 0, 0, ans);
  return ans == Infinity ? -1 : ans;
}

var helper = function(coins, amount, c_index, count, ans) {
  if (amount == 0) {
    ans = Math.min(ans, count);
    return 
  }

  if (c_index == coins.length) return;
  for(let k = amount / coins[c_index]; k >= 0 && k + count < ans; k--) {
    helper(coins, amount - k * coins[c_index], c_index + 1, count + k, ans);
  }
}

/* dfs */
// var coinChange = function(coins, amount) {
//   let memo = new Map()

//   const helper = (amount) => {
//     let res = Infinity;
//     if (amount == 0) return 0;
//     if(memo.has(amount)) return memo.get(amount);
//     for(let coin of coins) {
//       if (amount - coin < 0) break;
//       let subPro = dfs(amount - coin)
//       if(subPro == -1) continue;
//       res = Math.min(res, 1 + subPro);
//     }
//     memo.set(amount, (res === Infinity) ? -1 : res);

//     return res === Infinity ? -1 : res;
//   }

//   return helper(amount);
// }

/* 
  动态规划解法Ⅰ
*/
var coinChange = function(coins, amount) {
  if (!coins.length) return -1
  let memo = new Array(amount + 1).fill(0);
  for(let i = 1; i <= amount; i++) {
    let min = Infinity;
    for(let coin of coins) {
      if (i - coin >= 0 && memo[i - coin] < min) {
        min = memo[i - coin] + 1;
      }
    }
    memo[i] = min;
  }

  return memo[amount] == Infinity ? -1 : memo[amount];
}

/* 
  动态规划解法ⅠⅠ
*/
var coinChange = function(coins, amount) {
  if (!coins.length) return -1;
  let memo = new Array(amount + 1).fill(amount + 1);
  memo[0] = 0;

  for(let i = 1; i <= amount; i++) {
    for(let coin of coins) {
      if(i - coin >= 0) {
        // 凑成面值为 11 的最少硬币个数可以由以下三者的最小值得到：
        // 凑成面值为 10 的最少硬币个数 + 面值为 1 的这一枚硬币；
        // 凑成面值为 99 的最少硬币个数 + 面值为 2 的这一枚硬币；
        // 凑成面值为 66 的最少硬币个数 + 面值为 5 的这一枚硬币。
        memo[i] = Math.min(memo[i], memo[i - coin] + 1);
      }
    }
  }
  return memo[amount] == (amount + 1) ? -1 : memo[amount];
}

let coins = [1, 2, 5], amount = 11;
coinChange(coins, amount);