var TrieNode = function() {
  this.next = {};
  this.word = null;
}

/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = new TrieNode();
};

/**
 * Inserts a word into the trie. 
 * @param {Array} words
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  if (word.length === 0) return false

  let node = this.root;
  for(let w of word) {
    if (!node.next[w]) {
      node.next[w] = new TrieNode();
    }
    node = node.next[w];
  }
  node.word = word;
  return true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
// Trie.prototype.search = function(word) {
//   if (word === '') return false

//   let node = this.root;
//   for(let w of word) {
//     if (node.next[w]) {
//       node = node.next[w];
//     } else {
//       return false
//     }
//   }

//   return node.isEnd;
// };

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
// Trie.prototype.startsWith = function(prefix) {
//   if (prefix === '') return false;  // 漏了个case

//   let node = this.root;
//   for(let w of prefix) {
//     if (node.next[w]) {
//       node = node.next[w];
//     } else {
//       return false
//     }
//   }

//   return true;
// };

var findWords = function(board, words) {
  words = words.sort((a, b) => a.length - b .length)
  let direction = [[-1, 0], [0, -1], [0, 1], [1, 0]];
  let res = [];

  let trie = new Trie();
  for(let i = 0; i < words.length; i++) {
    trie.insert(words[i]);
  }

  let cols = board.length;
  let columns = board[0].length;
  let memo = Array.from({ length: cols }, () => new Array(columns).fill(false));

  for(let i = 0; i < cols; i++) {
    for(let j = 0; j < columns; j++) {
      dfs(board, i, j, trie.root, res, memo);
    }
  }

  return res;
}

function inArea(x, y, board) {
  return x >= 0 && y >= 0 && x < board.length && y < board[0].length
}

function dfs(board, row, col, node, res, memo) {
  if (!inArea(row, col, board)) return

  let cur = board[row][col];

  console.log(memo[row][col])
  console.log(cur)

  if (memo[row][col] || node.next[cur] == null) return;

  memo[row][col] = true;

  node = node.next[cur];
  if (node.word != null) {
    res.push(node.word);
    node.isEnd = null
  }

  // for(let k = 0; k < 4; k++) {
  //   let newX = row + direction[k][0];
  //   let newY = col + direction[k][1];

  //   console.log(row, col)
  //   console.log(newX, newY)
  //   if (inArea(row, col, board) && !memo[newX][newY]) {
  //     dfs(board, newX, newY, node, res, memo, direction)
  //   }

  // }
  dfs(board, row - 1, col, node, res, memo);
  dfs(board, row + 1, col, node, res, memo);
  dfs(board, row, col - 1, node, res, memo);
  dfs(board, row, col + 1, node, res, memo);

  memo[row][col] = false;
}

let board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]];
let words = ["oath","pea","eat","rain"];
let board1 = [["a","a"]]
let words1 = ["a"]
console.log(findWords(board1, words1))