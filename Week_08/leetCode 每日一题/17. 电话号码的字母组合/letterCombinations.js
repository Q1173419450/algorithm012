/**
 * @param {string} digits
 * @return {string[]}
 */


var letterCombinations = function(digits) {
    let obj = [" ", "*", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

    if (digits == null || digits.length === 0) {
        return []
    }

    let res = [];

    dfs(digits, obj, '', 0, res);
    return res
};

var dfs = function (digits, letter_map, letter, index, res) {
    if (index == digits.length) {
        res.push(letter);
        return
    }

    let c = digits.charAt(index);
    let pos = c - '0';
    let map_string = letter_map[pos];

    for(let i = 0; i < map_string.length; i++) {
        dfs(digits, letter_map, letter + map_string[i], index + 1, res);
    }
}

console.log(letterCombinations('23'));