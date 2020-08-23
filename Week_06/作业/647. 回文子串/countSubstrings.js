/**
 * @param {string} s
 * @return {number}
 */
/* 暴力 */
// var countSubstrings = function(s) {
//     let count = 0;
//     for(let i = 0; i < s.length; i++) {
//         for(let j = i; j < s.length; j++) {
//             if (isPalindrome(s.substring(i, j + 1))) {
//                 count ++;
//             }
//         }
//     }

//     return count
// };

// var isPalindrome = function(s) {
//     let i = 0;
//     let j = s.length - 1;

//     while(i < j) {
//         if (s[i] != s[j]) return false;
//         i++
//         j--
//     }

//     return true;
// }

/* 动态规划 */
const countSubstrings = (s) => {
    let count = 0;
    const len = s.length;

    let dp = new Array(len);
    for(let i = 0; i < len; i++) {
        dp[i] = new Array(len).fill(false);
    }


    for(let i = 0; i < len; i++) {
        for(let j = 0; j <= i; j++) {
            if (i === j) {
                dp[i][j] = true;
                count++
            } else if (i - j == 1 && s[i] == s[j]) {
                dp[i][j] = true
                count++
            } else if (i - j > 1 && s[i] == s[j] && dp[j + 1][i - 1]){  // 多个字符 不理解 dp[j + 1][i - 1]
                dp[i][j] = true
                count++
            }
        }
    }

    return count
}

console.log(countSubstrings('aaa'))