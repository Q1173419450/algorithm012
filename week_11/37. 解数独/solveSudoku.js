/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// class solveSudoku {
//     constructor(board) {
//         this.board = board;
//         this.rowUsed = Array.from({ length: 9 }, () => new Array(10).fill(false));
//         this.colUsed = Array.from({ length: 9 }, () => new Array(10).fill(false));
//         this.boxUsed = Array.from({length: 3}, () => Array.from({ length: 3 }, () => new Array(10).fill(false)));

//         for(let row = 0; row < this.board.length; row++) {
//             for(let col = 0; col < this.board[0].length; col++) {
//                 let num = board[row][col] - '0';

//                 if (num >= 1 && num <= 9) {
//                     this.rowUsed[row][col] = true;
//                     this.colUsed[row][col] = true;
//                     this.boxUsed[Math.floor(row / 3)][Math.floor(col / 3)][num] = true;
//                 }
//             }
//         }
//     }

//     recusiveSolveSudoku(row, col) {
//         // 边界校验, 如果已经填充完成, 返回true, 表示一切结束
//         if (col == this.board[0].length) {
//             col = 0;
//             row++;
//             if (row == this.board.length) return true
//         }

//         // 是空则尝试填充, 否则跳过继续尝试填充下一个位置
//         if (this.board[row][col] == '.') {
//             // 尝试填充1 ~ 9
//             for(let num = 1; num <= 9; num++) {
//                 let canUsed = !(this.rowUsed[row][num] || this.colUsed[col][num] || this.boxUsed[Math.floor(row / 3)][Math.floor(col / 3)][num]);
                
//                 if (canUsed) {
//                     this.rowUsed[row][num] = true;
//                     this.colUsed[col][num] = true;
//                     this.boxUsed[Math.floor(row / 3)][Math.floor(col / 3)][num] = true;

//                     this.board[row][col] = '0' + num;

//                     if (this.recusiveSolveSudoku(row, col + 1)) return true
                    
//                     this.board[row][col] = '.';
//                     this.rowUsed[row][num] = false;
//                     this.colUsed[col][num] = false;
//                     this.boxUsed[Math.floor(row / 3)][Math.floor(col / 3)][num] = false;
//                 }
//             }
//         } else {
//             return this.recusiveSolveSudoku(row, col + 1);
//         }
//         return false
//     }
// }

function solveSudoku(board) {
    this.board = board;
    this.rowUsed = Array.from({ length: 9 }, () => new Array(9).fill(false));
    this.colUsed = Array.from({ length: 9 }, () => new Array(9).fill(false));
    this.boxUsed = Array.from({length: 3}, () => Array.from({ length: 3 }, () => new Array(9).fill(false)));
    for(let row = 0; row < this.board.length; row++) {
        for(let col = 0; col < this.board[0].length; col++) {
            let num = board[row][col] + '';
            if (num >= 1 && num <= 9) {
                this.rowUsed[row][num] = true;
                this.colUsed[col][num] = true;
                this.boxUsed[Math.floor(row / 3)][Math.floor(col / 3)][num] = true;
            }
        }
    }
}

solveSudoku.prototype.recusiveSolveSudoku = function(board, row, col) {
    // 边界校验, 如果已经填充完成, 返回true, 表示一切结束
    if (col == this.board[0].length) {
        col = 0;
        row++;
        if (row == this.board.length) return true
    }

    // 是空则尝试填充, 否则跳过继续尝试填充下一个位置
    if (this.board[row][col] == '.') {
        // 尝试填充1 ~ 9
        for(let num = 1; num <= 9; num++) {
            let canUsed = !(this.rowUsed[row][num] || this.colUsed[col][num] || this.boxUsed[Math.floor(row / 3)][Math.floor(col / 3)][num]);
            if (canUsed) {
                this.rowUsed[row][num] = true;
                this.colUsed[col][num] = true;
                this.boxUsed[Math.floor(row / 3)][Math.floor(col / 3)][num] = true;

                this.board[row][col] = '' + num;

                if (this.recusiveSolveSudoku(row, col + 1)) return true
                
                this.board[row][col] = '.';
                this.rowUsed[row][num] = false;
                this.colUsed[col][num] = false;
                this.boxUsed[Math.floor(row / 3)][Math.floor(col / 3)][num] = false;
            }
        }
    } else {
        return this.recusiveSolveSudoku(row, col + 1);
    }
    return false
}

/* dfs */
function solveSudoku(board) {
    let rowUsed = Array.from({ length: 9 }, () => new Array(9).fill(false));    // 横
    let colUsed = Array.from({ length: 9 }, () => new Array(9).fill(false));    // 竖直
    let boxUsed = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => new Array(9).fill(false)));   // 方块
    // 确定 board 数字位置
    for(let row = 0; row < board.length; row++) {
        for(let col = 0; col < board[0].length; col++) {
            let num = board[row][col] + '';
            if (num >= 1 && num <= 9) {
                rowUsed[row][num] = true;
                colUsed[col][num] = true;
                boxUsed[Math.floor(row / 3)][Math.floor(col / 3)][num] = true;
            }
        }
    }
    const helper = (row, col) => {
        // 边界校验, 如果已经填充完成, 返回true, 表示一切结束
        if (col == board[0].length) {
            col = 0;
            row++;
            if (row == board.length) return true
        }
        // 是空则尝试填充, 否则跳过继续尝试填充下一个位置
        if (board[row][col] == '.') {
            // 尝试填充1 ~ 9
            for(let num = 1; num <= 9; num++) {
                let canUsed = !(rowUsed[row][num] || colUsed[col][num] || boxUsed[Math.floor(row / 3)][Math.floor(col / 3)][num]);
                if (canUsed) {
                    rowUsed[row][num] = true;
                    colUsed[col][num] = true;
                    boxUsed[Math.floor(row / 3)][Math.floor(col / 3)][num] = true;

                    board[row][col] = '' + num;

                    if (helper(row, col + 1)) return true
                    
                    board[row][col] = '.';
                    rowUsed[row][num] = false;
                    colUsed[col][num] = false;
                    boxUsed[Math.floor(row / 3)][Math.floor(col / 3)][num] = false;
                }
            }
        } else {
            return helper(row, col + 1);
        }
        return false
    }
    helper(0, 0);
    return board
}

let arr = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]

let recusive = new solveSudoku(arr);
console.log(recusive.recusiveSolveSudoku(0, 0))