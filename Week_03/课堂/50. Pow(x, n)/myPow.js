/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
/* 递归 */
var myPow = function(x, n) {
  if (n == 0) return 1;
  if (n == 1) return x;
  if (n < 0) return 1 / x * myPow(1 / x, - (n + 1));

  if (n > 0) {
    return n % 2 == 1 ? x * myPow(x, n - 1) : myPow(x * x, n / 2);
  }
};

