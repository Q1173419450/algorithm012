/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let nr = grid.length;
  if (!nr) {
    return 0
  }
  let nc = grid[0].length;


  let num_isLands = 0;
  for(let i = 0; i < nr; ++i) {
    for(let j = 0; j < nc; ++j) {
      if (grid[i][j] == '1') {
        num_isLands++;
        dfs(grid, i , j);
      }
    }
  }

  return num_isLands;
};

function dfs(grid, r, c) {
  if (!inArea(grid, r, c)) {
    return;
  }

  if(grid[r][c] != 1) {
    return
  }

  grid[r][c] = 2; // 标记遍历

  dfs(grid, r - 1, c);  // x 左边
  dfs(grid, r + 1, c);  // x 右边
  dfs(grid, r, c - 1);  // y 上边
  dfs(grid, r, c + 1);  // y 下边
}

function inArea(grid, r, c) { // 是否在网格范围内
  return r >= 0 && r < grid.length && c >= 0 && c < grid[0].length;
}

let arr = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

console.log(numIslands(arr));