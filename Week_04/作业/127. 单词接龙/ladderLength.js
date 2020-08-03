/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);

    if (wordSet.size == 0 || !wordSet.has(endWord)) {
      return 0;
    }

    wordSet.delete(beginWord);

    let queue = [];
    queue.push(beginWord);

    let visited = new Set();
    visited.add(beginWord);

    let wordLen = beginWord.length;
    let step = 1;
    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split('');

    while(queue.length > 0) {
      let currentSize = queue.length;

      for(let i = 0; i < currentSize; i++) {
        let word = queue.shift();
        let charArray = word.split('');

        for(let j = 0; j < wordLen; j++) {
          let originChar = charArray[j];
          for(let k = 0; k < letters.length; k++) {
            if (letters[k] == originChar) continue;
            charArray[j] = letters[k];
            let nextWord = charArray.join('');

            if(wordSet.has(nextWord)) {
              if (nextWord === endWord) {
                return step + 1
              }

              if (!visited.has(nextWord)) {
                queue.push(nextWord);
                visited.add(nextWord);
              }
            }
          }
          charArray[j] = originChar;
        }
      }
      step++;
    }
    return 0;
};

console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]));