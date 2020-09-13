/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// var exist = function(board, word) {
//     let m = board.length;
//     let n = board[0].length;
//     let words = word.split('');
//     let memo = new Array(m);
//     for(let i = 0; i < m; i++) {
//         memo[i] = new Array(n).fill(false);
//     }

//     for(let i = 0; i < m; i++) {
//         for(let j = 0; j < n; j++) {
//             dfs(words, memo[i][j]);
//         }
//     }

//     return false
// };

// const dfs = (words, memo) => {
//     if (words.length) return true;
//     if (memo[i][j]) {
//         words.splice(1);
//     }
//     memo[i][j] = false;
//     dfs(words, memo);
// }


let direction = [[-1, 0], [0, -1], [0, 1], [1, 0]];
var exist = function(board, word) {
    let m = board.length;
    let n = board[0].length;
    /* 
            x, y + 1
    x, y - 1 (x, y) x, y + 1
            x + 1, y
    */
    
    let memo = new Array(m);
    for(let i = 0; i < m; i++) {
        memo[i] = new Array(n).fill(false);
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            let flag = dfs(i, j, 0, word, board, memo);
            if (flag) {
                return true;
            }
        }
    }

    return false
}

function inArea(x, y, board) {
    return x >= 0 && y >= 0 && x < board.length && y < board[0].length
}

const dfs = (i, j, start, word, board, memo) => {
    if(board[i][j] !== word.charAt(start)) {
        return false
    }
    
    if(start == word.length - 1) {
        console.log(start, word.length)
        return board[i][j] = word.charAt(start);
    }

    
    memo[i][j] = true;
    let result = false;
    for (let k = 0; k < 4; k++) {
        let newX = i + direction[k][0];
        let newY = j + direction[k][1];
        if (inArea(newX, newY, board) && !memo[newX][newY]) {
            if (dfs(newX, newY, start + 1, word, board, memo)) {
                result = true;
                break
            }
        }
    }
    memo[i][j] = false;
    return result
}


let arr = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
// let arr2 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
let target = "ABCB";
// let target2 = "ABCCED";
console.log(exist(arr, target));
// console.log(exist(arr2, target2));