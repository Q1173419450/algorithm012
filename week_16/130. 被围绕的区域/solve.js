/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
/* dfs */
var solve = function(board) {
  let col = board.length;
  if (col === 0) return board;
  let row = board[0].length;

  for(let i = 0; i < col; i++) {
    for(let j = 0; j < row; j++) {
      let isEdge = i == 0 || j == 0 || i == col - 1 || j == row - 1; // 判断边框
      if (isEdge && board[i][j]) {
        dfs(board, i, j);
      }
    }
  }

  for(let i = 0; i < col; i++) {
    for(let j = 0; j < row; j++) {
      if (board[i][j] == 'O') {
        board[i][j] = 'X';
      }

      if (board[i][j] == '#') {
        board[i][j] = 'O';
      }
    }
  }
};

var dfs = function(board, col, row) {
  if(col < 0 || row < 0 || col >= board.length || row >= board[0].length || board[col][row] == 'X' || board[col][row] == '#') return;
  board[col][row] = '#';

  dfs(board, col - 1, row);
  dfs(board, col + 1, row);
  dfs(board, col, row - 1);
  dfs(board, col, row + 1);
}

let arr = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]

solve(arr)