/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
  let ans = [];

  for(let i = 0; i < words.length; i++) {
    if (exist(board, words[i])) {
      ans.push(words[i]);
    }
  }

  return ans
};

function exist(board, word) {
  let direction = [[-1, 0], [0, -1], [0, 1], [1, 0]];
  let column = board.length;
  let row = board[0].length;
  let memo = Array.from({ length: column }, () => new Array(row).fill(false));

  for(let i = 0; i < column; i++) {
    for(let j = 0; j < row; j++) {
      let flag = dfs(i, j, 0, word, board, memo, direction);
      if (flag) {
        return true
      }
    }
  }
  return false
}

function inArea(x, y, board) {
  return x >= 0 && y >= 0 && x < board.length && y < board[0].length
}

function dfs(i, j, start, word, board, memo, direction) {
  if (board[i][j] !== word.charAt(start)) return false
  if (start == word.length - 1) return board[i][j] = word.charAt(start);

  memo[i][j] = true;
  let result = false;
  for(let k = 0; k < 4; k++) {
    let newX = i + direction[k][0];
    let newY = j + direction[k][1];

    if (inArea(newX, newY, board) && !memo[newX][newY]) {
      if (dfs(newX, newY, start + 1, word, board, memo, direction)) {
        result = true;
        break;
      }
    }
  }

  memo[i][j] = false;
  return result
}

let board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]];
let words = ["oath","pea","eat","rain"];
let board1 = [["a","a"]]
let words1 = ["a"]
console.log(findWords(board1, words1))