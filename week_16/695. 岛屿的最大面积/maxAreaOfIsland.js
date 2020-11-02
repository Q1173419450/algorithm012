/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let col = grid.length;
  let row = grid[0].length;
  let res = 0;
  for(let i = 0; i < col; i++) {
    for(let j = 0; j < row; j++) {
      if (grid[i][j] == 1) {
        res = Math.max(res, dfs(grid, i, j));
      }
    }
  }
  return res;
};

var dfs = function(grid, i , j) {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] == 0) return 0;
  grid[i][j] = 0;
  let num = 1;
  nums += dfs(grid, i + 1, j);
  nums += dfs(grid, i - 1, j);
  nums +=  dfs(grid, i, j - 1);
  nums +=  dfs(grid, i, j + 1);
  return num
}