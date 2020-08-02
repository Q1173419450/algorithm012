/**
 * @param {number} N
 * @return {number}
 */
/* 
  暴力递归
  重叠子问题  
*/
var fib = function(N) {
  if (N == 1 || N == 2) return 1;

  return fib(N - 1) + fib(N - 2);
};

/* 
  hash map
*/

var fib = function(N) {
  if (N < 1) return 0;

  let map = Array.from(N + 1).fill(0);

  return helper(map, N);
};

function helper(map, N) {
  
  if (N == 1 || N == 2) return 1;

  if (map[N] != 0) return map[N];

  map[N] = helper(map, N - 1) + helper(map, N - 2);

  return map[N];
}

/* 想办法存储之前的两个状态就行了。 */
var fib = function(N) {
  if (N < 1) return 0;
  if (N == 2 || N == 1) return 1;

  let prev = 1, curr = 1;
  for(let i = 3; i <= N; i++) {
    let sum = prev + curr;
    prev = curr;
    curr = sum;
  }

  return curr;
}