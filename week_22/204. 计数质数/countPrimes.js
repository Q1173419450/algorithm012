/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n < 2) return 0;
  let res = 0;

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      res++
    }
  }

  console.log(res);
  return res;
};

function isPrime(num) {
  //取平方根
   let temp = parseInt(Math.sqrt(num))
  //循环判断
  for (let i = 2; i <= temp; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

/* 厄拉多塞筛法 */
var countPrimes = function (n) {
  if (n < 2) return 0;
  let res = 0;
  let signs = new Array(n).fill(false);
  for(let i = 2; i < n; i++) {
    if (!signs[i]) {
      res++;
      for(let j = i + i; j < n; j+=i) {
        signs[j] = true;
      }
    }
  }

  return res;
}

countPrimes(10);