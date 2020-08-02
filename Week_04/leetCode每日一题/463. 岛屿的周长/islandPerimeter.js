/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let nr = grid.length;
  if (!nr) {
    return 0
  }
  let nc = grid[0].length;

  let area = 0;
  for(let r = 0; r < nr; ++r) {
    for(let c = 0; c < nc; ++c) {
      if (grid[r][c] == 1) {
        let a = dfs(grid, r, c);
        return a
        // area = Math.max(area, a);
      }
    }
  }

  return area
};

function dfs(grid, r, c) {
  if(!inArea(grid, r, c)) {
    return 1
  }

  if (grid[r][c] == 0) {
    return 1;
  }

  if (grid[r][c] != 1) {
    return 0
  }

  grid[r][c] = 2

  return dfs(grid, r - 1, c) + dfs(grid, r + 1, c) + dfs(grid, r, c - 1) + dfs(grid, r, c + 1)
}

// function inArea(grid, r, c) {
//   return Boolean((r < 0 || c < 0 || r >= grid.length || c >= grid[0].length))
// }

function inArea(grid, r, c) { // 是否在网格范围内
  return r >= 0 && r < grid.length && c >= 0 && c < grid[0].length;
}

let arr = [
  [0,1,0,0],
  [1,1,1,0],
  [0,1,0,0],
  [1,1,0,0]
]
console.log(islandPerimeter(arr));