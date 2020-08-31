/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
/* 
    动态规划
    空间复杂度：O(n^2);
 */
var findLength = function(A, B) {
    let lenA = A.length;
    let lenB = B.length;

    let res = 0;
    const dp = new Array(lenA + 1);
    for(let i = 0; i <= lenA; i++) {
        dp[i] = new Array(lenB + 1).fill(0);
    }

    for(let i = 1; i <= lenA; i++) {
        for(let j = 1; j <= lenB; j++) {
            if (A[i - 1] == B[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }

            res = Math.max(dp[i][j], res);
        }
    }

    return res;
};

/* 
    动态规划
    压缩空间
*/
const findLength = function(A, B) {
    let lenA = A.length;
    let lenB = B.length;

    let res = 0;
    const dp = new Array(lenB + 1).fill(0);

    for(let i = 1; i <= lenA; i++) {
        for(let j = lenB; j >= 1; j--) {
            if(A[i - 1] == B[j - 1]) {
                dp[j] = dp[j - 1] + 1;
            } else {
                dp[j] = 0;
            }
            res = Math.max(dp[j], res);
        }
    }

    return res;
}

/* 
    滑动窗口
*/
const findLength = (A, B) => {
    const lenA = A.length;
    const lenB = B.length;

    let res = 0;

    for(let i = 0; i <= lenB; i++) {
        const len = Math.min(lenA, lenB - i);
        const maxLen = getMaxLen(A, B, 0, i, len);
        res = Math.max(res, maxLen);
    }

    for(let i = 0; i <= lenA; i++) {
        const len = Math.min(lenB, lenA - i);
        const maxLen = getMaxLen(A, B, i, 0, len);
        res = Math.max(res, maxLen);
    }

    return res;
}

function getMaxLen(A, B, aStart, bStart, windowLen) {
    let res = 0;
    let subLen = 0;
    for(let i = 0; i < windowLen; i++) {
        if (
            A[aStart + i] !== undefined &&
            B[bStart + i] !== undefined &&
            A[aStart + i] == B[bStart + i]
        ) {
            subLen++
        } else {
            subLen = 0;
        }
        res = Math.max(res, subLen);
    }

    return res;
}