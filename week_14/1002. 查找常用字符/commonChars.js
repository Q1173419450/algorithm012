/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let minFreq = new Array(26).fill(Infinity);
    for(let word of A) {
      let freq = new Array(26).fill(0);
      let len = word.length;
      for(let i = 0; i < len; i++) {
        let ch = word.charAt(i);
        freq[ch.charCodeAt() - 'a'.charCodeAt()]++  // 将字母转为数字
      }
      for(let i = 0; i < 26; i++) {
        minFreq[i] = Math.min(minFreq[i], freq[i]);
      }
    }

    console.log(minFreq)
    let ans = [];
    for(let i = 0; i < 26; i++) {
      for(let j = 0; j < minFreq[i]; j++) {
        ans.push(String.fromCharCode(i + 'a'.charCodeAt())) // 将数字转为 ascii 码
      }
    }
    return ans;
};

commonChars(["bella","label","roller"])