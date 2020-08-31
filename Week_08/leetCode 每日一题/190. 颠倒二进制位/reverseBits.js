/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
/* 
    a & b: 都是1 才返回 1，否则为 0
    a | b: 有一个 1  就返回 1，否则为 0
    a ^ b: 不同则为1，相同为 0
*/
var reverseBits = function(n) {
    let ans = 0;
    for(let i = 0; i < 32; i++) {
        ans <<= 1;
        ans += n & 1;
        n >>= 1;
    }

    return ans >>> 0
};