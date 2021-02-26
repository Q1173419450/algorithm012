/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let seen = new Set();

  while (n != 1 && !seen.has(n)) {  // 不等于1 或者是非循环
    seen.add(n);
    n = getNext(n);
  }
  return n == 1;
};

var getNext = function (n) {
  let total = 0;
  while (n > 0) {
    let d = n % 10;
    total += d * d;
    n = Math.floor(n / 10);
  }
  return total;
}