/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  for (let i = 0; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      console.log(triangle[i][j])
      // 取得最小值、且相邻 + 1
    }
  }
};

/* 
  数学归纳

  我们在这两个位置中选择一个路径和较小的来进行转移：
  f[i][j]=min(f[i−1][j−1],f[i−1][j])+c[i][j]  

  当 j=0j=0 时，f[i-1][j-1]f[i−1][j−1] 没有意义，因此状态转移方程为：
  f[i][0]=f[i−1][0]+c[i][0]

  当 j=ij=i 时，f[i-1][j]f[i−1][j] 没有意义，因此状态转移方程为：
  f[i][i]=f[i−1][i−1]+c[i][i]
*/

let arr = [
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
]

let res = minimumTotal(arr);