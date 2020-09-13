/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let memo = new Map();
    let temp = 0;

    return dfs(s, temp, memo);
};

function dfs(nums, temp, memo) {
    if(temp == nums.length) return 1;

    if (nums.charAt(temp) == '0') return 0;

    if (memo.has(temp)) return memo.get(temp);

    let ans1 = dfs(nums, temp + 1, memo);
    let ans2 = 0;

    if(temp < nums.length - 1) {
        let ten = (nums.charAt(temp) - '0') * 10;
        let one = nums.charAt(temp + 1) - '0'

        if(ten + one <= 26) {
            ans2 = dfs(nums, temp + 2, memo);
        }
    }

    memo.set(temp, ans1 + ans2);
    return ans1 + ans2;
}

let res = numDecodings("12")
console.log(res)
// 将 s 根据情况进行拆分
// s[i] temp++
// s[i] + s[i + 1] < 26 temp ++ 