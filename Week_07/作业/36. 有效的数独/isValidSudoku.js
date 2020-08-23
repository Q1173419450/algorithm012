/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = {};
    let columns = {};
    let boxes = {};

    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            let num = board[i][j];
            if (num != '.') {
                let boxIndex = parseInt((i / 3)) * 3 + parseInt(j / 3);
                if (rows[`${i}-${num}`] || columns[`${j}-${num}`] || boxes[`${boxIndex}-${num}`]) {
                    return false;
                }

                rows[`${i}-${num}`] = true;
                columns[`${j}-${num}`] = true;
                boxes[`${boxIndex}-${num}`] = true;

            }
        }
    }

    console.log(rows)

    return true
};

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
  ];

console.log(isValidSudoku(arr))