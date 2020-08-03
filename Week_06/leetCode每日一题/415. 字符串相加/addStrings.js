/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let res = [];

  while(i >= 0 || j >= 0) {
    let n1 = i >= 0 ? num1.charAt(i) - '0' : 0;
    let n2 = j >= 0 ? num2.charAt(j) - '0' : 0;

    let temp = n1 + n2 + carry;

    carry = Math.floor(temp / 10);
    console.log(carry)
    res.push(temp % 10);

    i--;
    j--;
  }
  if (carry == 1) {
    res.push(1)
  };
  return res.reverse().join('');
};

console.log(addStrings('9', '9'))