/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  let col = grid.length;
  if(col == 0) return 0
  let row = grid[0].length;
  let isLands = 0;

  for(let i = 0; i < col; i++) {
    for(let j = 0; j < row; j++) {
      if (grid[i][j] == 1) {
        isLands++
        dfs(grid, i, j);
      }
    }
  }

  return isLands
}

var dfs = function(grid, i, j) {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] == 0 || grid[i][j] == 2) return 0;
  grid[i][j] = '2'
  dfs(grid, i - 1, j);
  dfs(grid, i + 1, j); 
  dfs(grid, i, j - 1); 
  dfs(grid, i, j + 1); 
}

let grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

numIslands(grid);