/**
 * @param {number[]} bills
 * @return {boolean}
 */
/* 
  暴力穷举
*/
var lemonadeChange = function(bills) {
  let five = 0;
  let ten = 0;
  for(let bill in bills) {
    if (bill == 5) {
      five++
    } else if (bill == 10) {
      if (five) {
        return false
      }
      five--
      ten++
    } else {
      if (five > 0 && ten > 0) {
        five--
        ten--
      } else if (five == 3) {
        five -= 3;
      } else {
        return false
      }
    }
  }

  return true
};

console.log(lemonadeChange([5,5,5,10,20]))