/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function(board, word) {
  let cols = board.length;
  let rows = board[0].length;
  let memo = Array.from({ length: cols }, () => new Array(rows).fill(false));
  let direction = [[-1, 0], [0, -1], [0, 1], [1, 0]];
  
  for(let col = 0; i < cols; col++) {
    for(let row = 0; row < rows; row++) {
      let flag = dfs(col, row, 0, board, word, memo, direction);
      if (flag) {
        return true
      }
    }
  }
  return false
}

var inArea = (x, y, board) => {
  return x >= 0 && y >= 0 && x <= board.length && y <= board[0].length;
}

var dfs = (col, row, start, board, word, memo, direction) => {
  if (board[col][row] != word.chatAt(start)) return false
  if (start == word.length - 1) return board[col][row] = word.chatAt(start);

  memo[col][row] = true;
  let result = false;
  for(let i = 0; i < 4; i++) {
    let newX = col + direction[k][0];
    let newY = row + direction[k][1];
    if (inArea(newX, newY, board) && !memo[newX][newY]) {
      if (dfs(newX, newY, start + 1, word, board, memo, direction)) {
        result = true;
        break
      }
    }
  }
  memo[col][row] = false;
  return result;
}