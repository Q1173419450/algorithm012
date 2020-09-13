/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    let wordLen = beginWord.length;
    let step = 1;

    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split('');
    let visited = new Set();
    visited.add(beginWord);

    let queue = [];
    queue.push(beginWord);

    while(queue.length) {
        let currentSize = queue.length;

        for(let i = 0; i < currentSize; i++) {
            let word = queue.shift();
            let charArray = word.split('');

            for(let j = 0; j < wordLen; j++) {
                let originChar = charArray[j];
                for(let k = 0; k < letters.length; k++) {
                    if(letters[k] == originChar) continue;
                    charArray[j] = letters[k];
                    let nextWord = charArray.join('');

                    if(wordSet.has(nextWord)) {
                        if(nextWord === endWord) {
                            return step + 1;
                        }

                        if(!visited.has(nextWord)) {
                            queue.push(nextWord);
                            visited.add(nextWord);
                        }
                    }
                }
                charArray[j] = originChar;
            }
        }
        step++
    }
    return 0
};