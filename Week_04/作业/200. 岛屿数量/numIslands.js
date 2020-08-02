/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
  let nr = grid.length;
  if (nr === 0) {
    return 0
  }
  let nc = grid[0].length;
  let num_isLands = 0;

  for(let r = 0; r < nr; r++) {
    for(let c = 0; c < nc; c++) {
      if (grid[r][c] == 1) {
        num_isLands++
        dfs(grid, r, c);
      }
    }
  }

  return num_isLands
};

function dfs(grid, r, c) {
  if (!inArea(grid, r, c)) {
    return 0
  }

  if (grid[r][c] != 1) {
    return 0
  }

  grid[r][c] = 2;

  dfs(grid, r - 1, c);
  dfs(grid, r + 1, c);
  dfs(grid, r, c - 1);
  dfs(grid, r, c + 1);
}

function inArea(grid, r, c) {
  return r >= 0 && r < grid.length && c >= 0 && c < grid[0].length;
}