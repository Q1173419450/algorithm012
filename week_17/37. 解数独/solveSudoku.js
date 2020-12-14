/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  /* 竖 */
  let vertical = Array.from({
    length: 9
  }, () => new Array(9).fill(false));
  /* 横 */
  let horizontal = Array.from({length: 9}, () => new Array(9).fill(false));
  /* 块 */
  let block = Array.from({
    length: 3
  }, () => Array.from({
    length: 3
  }, () => new Array(9).fill(false)));

  /* 查询board 数字 */
  let rows = board.length;
  let cols = board[0].length;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let num = board[row][col]  + '';
      if (num >= 1 && num <= 9) {
        vertical[row][num] = true;
        horizontal[col][num] = true;
        block[Math.floor(row / 3)][Math.floor(col / 3)][num] = true;
      }
    }
  }

  const helper = (row, col) => {
    if (col == cols) {
      col = 0;
      row++
      if (row == rows) return true
    }

    if (board[row][col] == '.') {
      for (let num = 1; num <= 9; num++) {
        let isUse = horizontal[col][num] ||
          vertical[row][num] ||
          block[Math.floor(row / 3)][Math.floor(col / 3)][num];
        if (!isUse) {
          horizontal[col][num] = true;
          vertical[row][num] = true;
          block[Math.floor(row / 3)][Math.floor(col / 3)][num] = true;
  
          board[row][col] = '' + num;
          if (helper(row, col + 1)) return true;
  
          board[row][col] = '.';
          horizontal[col][num] = false;
          vertical[row][num] = false;
          block[Math.floor(row / 3)][Math.floor(col / 3)][num] = false;
        }
      }
    } else {
      return helper(row, col + 1);
    } 
    return false
  }
  console.log(board)
  return helper(0, 0)
};

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

console.log(solveSudoku(board));