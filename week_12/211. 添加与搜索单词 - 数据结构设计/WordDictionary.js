var TrieNode = function() {
  this.next = {};
  this.isEnd = false;
}

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.root = new TrieNode();
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  if (word === '') return false

  let node = this.root;
  for(let w of word) {
    if (!node.next[w]) {
      node.next[w] = new TrieNode();
    }
    node = node.next[w];
  }
  node.isEnd = true;
  return true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  if(word === '') return false;

  return this.dfs(word, this.root);
};

WordDictionary.prototype.dfs = function(word, root) {
  let len = word.length
  let node = root;
  for(let i = 0; i < len; i++) {
    const w = word[i];
    if (w === '.') {
      const keys = Reflect.ownKeys(node.next);
      console.log(keys);
      for(const key of keys) {
        const found = this.dfs(word.slice(i + 1), node.next[key])
        if (found) return true
      }
      return false;
    } 

    if(!node.next[w]) {
      return false
    }
    node = node.next[w];
  }

  return node.isEnd;
}

// WordDictionary.prototype.dfs = function(root, word) {
//   const length = word.length;
//   let node = root;
//   for (let i = 0; i < length; ++i) {
//       const ch = word[i];
//       // 若是通配符，则尝试遍历所有的情况(DFS)
//       if (ch === ".") {
//           const keys = Reflect.ownKeys(node.next);
//           console.log(keys);
//           for (const key of keys) {
//               const found = this.dfs(node.next[key], word.slice(i + 1));
//               if (found) return true;
//           }
//           return false;
//       }

//       if (!node.next[ch]) {
//           return false;
//       }
//       node = node.next[ch];
//   }
//   return node.isEnd;
// };

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

 /* https://blog.csdn.net/xiaobing_hope/article/details/78645273 js字符与ASCII码互转的方法 */
 /* Reflect.ownKeys(node.next) */