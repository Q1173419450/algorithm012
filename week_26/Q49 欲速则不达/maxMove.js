var maxMove = function(length, width) {
  let row = length + 1;
  let col = width + 1;

  let useRow = new Array(row).fill(0);
  let useCol = new Array(col).fill(0);

  let move = [];
  let moveProcess = [];

  Move(move, moveProcess, useRow, useCol, row, col, 0, 0, 0);

  move = move.sort((a, b) => a - b);

  return move[move.length - 1];
}

var Move = function(move, moveProcess, useRow, useCol, row, col, x, y, step) {
  // 抵达终点
  if(x == col - 1 && y == row - 1) {
    move.push(step);
    console.log(moveProcess.length + ':' + moveProcess);
    return true;
  }

  // 上
  if (y != 0 && useCol[x] < 2) {
    useCol[x]++;
    moveProcess.push('👆');
    Move(move, moveProcess, useRow, useCol, row, col, x, y - 1, step + 1);
    moveProcess.pop();
    useCol[x]--;
  }

  // 下
  if(y != row - 1 && useCol[x] < 2) {
    useCol[x]++;
    moveProcess.push('👇');
    Move(move, moveProcess, useRow, useCol, row, col, x, y + 1, step + 1);
    moveProcess.pop();
    useCol[x]--;
  }

  // 左
  if (x != 0 && useRow[y] < 2) {
    useRow[y]++;
    moveProcess.push('👈');
    Move(move, moveProcess, useRow, useCol, row, col, x - 1, y, step + 1);
    moveProcess.pop();
    useRow[y]--;
  }

  // 右
  if (x != col - 1 && useRow[y] < 2) {
    useRow[y]++;
    moveProcess.push('👈');
    Move(move, moveProcess, useRow, useCol, row, col, x + 1, y, step + 1);
    moveProcess.pop();
    useRow[y]--;
  }
  return false;
}

var res = maxMove(5, 6);
console.log(res);