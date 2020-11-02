/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
/* 
    "leelee"
    "lleeelee"
*/
var isLongPressedName = function(name, typed) {
    typed = Array.from(new Set(typed)).join('');
    return typed === name
};

var isLongPressedName = function(name, typed) {
    let i = 0;
    let n = name.length;
    let t = typed.length;
    for(let j = 0; j < t; j++) {
        if (i < n && name.charAt(i) === typed.charAt(j)) i++
        else if (j == 0 || typed.charAt(j) !== typed.charAt(j - 1)) return false
    }
    return i === n;
}

console.log(isLongPressedName('alex', 'aaleex'))