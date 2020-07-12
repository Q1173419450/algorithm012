/* 
  70. 爬楼梯
  假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

  每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
*/
var climbStairs = function(n) {
  // if (n <= 2) return n;
  let p = 0, q = 0, r = 1;
   for(let i = 0; i < n; i++) {
    p = q;
    q = r;
    r = p + q;
   }

   return r;
};

/* 通项公式 */
var climbStairs = function(n) {
  let sqrt5 = Math.sqrt(5);

  let fibn = Math.pow((1 + sqrt5) / 2, n + 1) - Math.pow((1 - sqrt5) / 2, n + 1);

   return fibn / sqrt5;
};