var maximumProduct = function (nums) {
  let min1 = Infinity, min2 = Infinity;
  let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;

  for(const num of nums) {
    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < num2) {
      min2 = num;
    }

    if(num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (num > max2) {
      max3 = max2;
      max2 =num;
    } else if (num > max3) {
      max3 = num;
    }
  }

  /* 俩负数一正、三正数 */
  return Math.max(min1 * min2 * max1, max1 * max2 * max3);
}