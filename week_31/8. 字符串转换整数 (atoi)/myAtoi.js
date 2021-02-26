/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  if (s == null || s.length == 0) return 0;
  let Max = 2**31-1;
  let Min = -(2**31);

  let res = 0;
  let index = 0;

  // 过滤空格
  while ((index < s.length) && (s.charAt(index) == ' ')) index++;
  if (index === s.length) return 0;

  // 确定正负号
  let firstChar = s.charAt(index);
  let positive = true;
  if (!isDigit(firstChar)) {
    if ((firstChar != '+') && (firstChar != '-')) return 0;
    index++;
    positive = firstChar != '-';
  }

  // 边界
  let limit = positive ? (-Max) : Min;

  // 若第一位为 0 则去掉
  while (index < s.length && s.charAt(index) == '0') index++;

  // 取每一位数字
  while ((index < s.length) && isDigit(s.charAt(index))) {
    let digit = s.charAt(index++) - '0'; // 转化为数字
    if (res < (limit + digit) / 10) {
      return positive ? Max : Min;
    }
    res = (res * 10) - digit;
  }
  return positive ? (-res) : res;
};

var isDigit = function (c) {
  return (c >= 0 && c <= 9)
} 