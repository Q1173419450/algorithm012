/**
 * @param {number} N
 * @return {number}
 */
/* 暴力
  时间复杂度 O(n ^ 2);
*/
var monotoneIncreasingDigits = function(N) {
  for(let i = N; i > 0; i--) {
    if (checkNum(i)) return i;
  }
  return 0;
};

var checkNum = function(num) {
  let max = 10;
  while (num) {
    let t = num % 10;
    if (max >= t) {
      max = t;
    } else {
      return false;
    }
    num = Math.floor(num / 10);
  }

  return true;
}

/* 贪心 */
var monotoneIncreasingDigits = function(N = 1234) {
  let nums = N.toString().split('');
  let max = nums.length;
  for(let i = nums.length - 1; i > 0; i--) {
    if (nums[i - 1] > nums[i]) {
      max = i;
      nums[i - 1] -= 1;
    }
  }
  for(let i = max; i < nums.length; i++) {
    nums[i] = '9';
  }
  return Number(nums.join(''));
}

let res = monotoneIncreasingDigits();
console.log(res);