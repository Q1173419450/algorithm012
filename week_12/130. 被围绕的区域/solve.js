/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let n = board.length;
    let m = board[0].length;

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            let isEdge = i == 0 || j == 0 || i == n - 1 || j == m - 1; // 判断边框
            if(isEdge && board[i][j]) {
                dfs(board, i, j);
            } 
        }
    }

    console.log(board);
    console.log('----')

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if (board[i][j] == 'O') {
                board[i][j] = 'X'
            }

            if (board[i][j] == '#') {
                board[i][j] = 'O'
            }
        }
    }
    return board;
};

var dfs = function(board, i, j) {
    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] == 'X' || board[i][j] == '#') return;

    board[i][j] = '#';

    dfs(board, i - 1, j);
    dfs(board, i + 1, j);
    dfs(board, i, j - 1);
    dfs(board, i, j + 1);
}

let arr = [
    ["X","X","X","X"],
    ["X","O","O","X"],
    ["X","X","O","X"],
    ["X","O","X","X"]
]

console.log(solve(arr))