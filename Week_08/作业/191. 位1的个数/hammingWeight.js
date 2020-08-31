/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let bits = 0;
    let mask = 1;

    for(let i = 0; i < 32; i++) {
        if (n & mask != 0) {
            bits++
        }
        mask <<= 1; // 左移一位
    }

    return bits;
};


/**
 * 在二进制表示中，数字 nn 中最低位的 11 总是对应 n - 1n−1 中的 00 。因此，将 nn 和 n - 1n−1 与运算总是能把 nn 中最低位的 11 变成 00 ，并保持其他位不变。
 * @param {*} n 
 */
var hammingWeight = function(n) {
    let sum = 0;
    while(n != 0) {
        sum++
        n &= (n - 1);
        console.log(n)
    }
    return sum;
}

console.log(hammingWeight(00000000000000000000000000001011))