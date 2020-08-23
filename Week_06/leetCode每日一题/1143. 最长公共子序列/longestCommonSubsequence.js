/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let table = []; // 初始化二维数组
    for(let k = 0; k < text1.length + 1; k++) {
        table[k] = new Array();
        for(let j = 0; j < text2.length + 1; j++) {
            table[k][j] = 0
        }
    }

    for(let row = 1; row < table.length; row++) {
        let ch1 = text1.charAt(row - 1);
        for(let col = 1; col < table[row].length; col++) {
            let ch2 = text2.charAt(col - 1);
            if (ch1 === ch2) {
                table[row][col] = table[row - 1][col - 1] + 1
            } else {
                table[row][col] = Math.max(table[row - 1][col], table[row][col - 1])
            }
        }
    }

    let lastRow = table[table.length - 1];
    return lastRow[lastRow.length - 1];
};

let text1 = "abcde", text2 = "ace";

longestCommonSubsequence(text1, text2)