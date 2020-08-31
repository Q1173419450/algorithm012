/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let counts = new Array(26).fill(0);
    for(let i = 0; i < s.length; i++) {
        counts[s.charCodeAt(i) - 'a'.charCodeAt()]++
    }

    for(let i = 0; i < t.length; i++) {
        counts[t.charCodeAt(i) - 'a'.charCodeAt()]--
    }

    for(let count of counts) {
        if (count !== 0) return false
    }
    return true
};

console.log(isAnagram('a', 'b'))