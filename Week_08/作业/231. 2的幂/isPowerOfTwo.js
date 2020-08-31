/**
 * @param {number} n
 * @return {boolean}
 */
/* 
    恒有 n & (n - 1) == 0，这是因为：
        n 二进制最高位为 1，其余所有位为 0；
        n - 1 二进制最高位为 0，其余所有位为 1；
    这是 n 为 2 的幂的必要性，我论证一下充分性： n & n-1 可以把 n 最低位的 1 变 0，而当n & n-1 == 0时，则说明 n 只有一个1。
*/
var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n - 1)) == 0;
};

// console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(218))