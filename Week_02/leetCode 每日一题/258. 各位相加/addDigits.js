/**
 * @param {number} num
 * @return {number}
 */

var addDigits = function (num) {
  if (num < 10) { //终止条件
    return num
  }

  let next = 0;
  while(num != 0) {
    next = next + num % 10; //个位
    num = Math.floor(num / 10);  //缩小一位
  }

  return addDigits(next);
}

// var addDigits = function (num) {
//   return (num - 1) % 9 + 1;
// };

let res = addDigits(38);
console.log(res)