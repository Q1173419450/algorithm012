/**
 * @param {number[][]} grid
 * @return {number}
 */
/* 
  给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

  说明：每次只能向下或者向右移动一步。
*/
var minPathSum = function(grid) {
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[0].length; j++) {
      if (i == 0 && j == 0) continue;
      else if (i === 0) grid[i][j] += grid[i][j - 1];   // 上单元格
      else if (j === 0) grid[i][j] += grid[i - 1][j];   // 左单元格
      else grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])   // 如果都不等于0，则需要判定当前节点的左单元格大还是上单元格大
    }
  }

  return grid[grid.length - 1][grid[0].length - 1];
};

let grid = [
  [1,3,1],
  [1,5,1],
  [4,2,1],
  [1,2,3]
]

minPathSum(grid);