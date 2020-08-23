/**
 * @param {number} N
 * @return {number}
 */
/* 动态规划 */
/* 
    寻找状态方程
    fib(i + 1) = fib(i) + fib(i + 1)
*/
var fib = function(N) {
    let sum = 0;

    let cur = 0, next = 1;
    for(let i = 0; i < N; i++) {
        sum = (cur + next) % 1000000007;
        cur = next;
        next = sum;
    }

    return cur;
};