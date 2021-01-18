/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  // let dires = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let dx = [0, 0, 1, -1];
  let dy = [1, -1, 0, 0];

  let m = matrix.length;
  let n = matrix[0].length;
  let queue = [];

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        queue.push({i , j});
      } else {
        matrix[i][j] = -1;
      }
    }
  }

  while (queue.length) {
    let size = queue.length;
    for(let i = 0; i < size; i++) {
      let node = queue.shift();
      let curX = node[0];
      let curY = node[1];

      for(let i = 0; i < 4; i++) {
        let newX = curX + dx[i];
        let newY = curY + dy[i];

        if(newX >= 0 && newX < m && newY >= 0 && newY < n && matrix[newX][newX] == -1) {
          matrix[newX][newX] = matrix[curX][curY] + 1;
          queue.push({newX, newY});
        }
      }
    }
  }
  return matrix;
};


var inArea = function(x, y, m, n) {
  return x >= 0 && x < m && y >= 0 && y < n;
}