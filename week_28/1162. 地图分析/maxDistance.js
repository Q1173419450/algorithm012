/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
  // let dire = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];

  let queue = [];
  let m = grid.length;
  let n = grid[0].length;

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        queue.push({i, j});
      }
    }
  }

  let hasOcean = false;
  let point = null;
  while (queue.length) {
    point = queue.shift();
    let x = point[0];
    let y = point[1];
    for(let i = 0; i < 4; i++) {
      let newX = x + dx[i];
      let newY = y + dy[i];

      if (newX < 0 || newX >= m || newY < 0 || newY >= n || grid[newX][newY] != 0) continue;
      grid[newX][newY] = grid[x][y] + 1;
      hasOcean = true;
      queue.push({newX, newY});
    }
  }

  if (point == null || !hasOcean) return -1;

  return grid[point[0]][point[1]] - 1;
};

var maxDistance = function(grid) {
  let dires = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let N = grid.length;
  let queue = [];

  for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
      if (grid[i][j] == 1) {
        queue.push(getIndex(i, j, N));
      }
    }
  }

  let size = queue.length;
  if (size == 0 || size == N * N) return -1;

  let visited = Array.from({length: N}, () => new Array(N).fill(false));

  let step = 0;
  while (queue.length) {
    let currentQueueSize = queue.length;
    for(let i = 0; i < currentQueueSize; i++) {
      let head = queue.shift();
      let currentX = Math.floor(head / N);
      let currentY = head % N;

      for(let dire of dires) {
        let newX = currentX + dire[0];
        let newY = currentY + dire[1];
        if (inArea(newX, newY, N) && !visited[newX][newY] && grid[newX][newY] == 0) {
          visited[newX][newY] = true;
          queue.push(getIndex(newX, newY, N));
        }
      }
    }
    step++;
  }
  return step - 1;
}

var getIndex = function(x, y, N) {
  return x * N + y;
}

var inArea = function(x, y, N) {
  return x >= 0 && x < N && y >= 0 && y < N;
}