/* https://leetcode-cn.com/problems/plus-one/solution/hua-jie-suan-fa-66-jia-yi-by-guanpengchn/ */

var plusOne = function (digits) {
  const len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    digits[i]++;
    digits[i] %= 10;

    if (digits[i] != 0) {
      return digits;
    }
  }
  digits = [...Array(len + 1)].map((_) => 0);
  digits[0] = 1;
  return digits;
};
let res = plusOne([9, 9, 9]);
console.log(res);
