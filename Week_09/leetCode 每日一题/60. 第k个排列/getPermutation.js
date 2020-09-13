/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
/* DFS + 剪枝 + 有序数组 */
/* 全排列 */
const getPermutation = (n, k) => {
    const memo = new Set();

    let factorial = 1;
    for(let i = 1; i <= n; i++) {
        factorial = factorial * i;
    }

    const dfs = (temp) => {
        const progress = temp.length;
    
        if (progress == n) {
            return temp.join('');
        }
    
        const groupNum = factorial / (n - progress);
        factorial = groupNum;

        for(let i = 1; i <= n; i++) {
            if (memo.has(i)) continue;
            if (k > groupNum) {
                k = k - groupNum
                continue
            }

            temp.push(i);
            memo.add(i);
            return dfs(temp);
        }
    }

    return dfs([])
}
