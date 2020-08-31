/**
 * @param {string} s
 * @return {number}
 */
/* 
    哈希表
    map 的用法：
        size、set、get、has、delete、clear
*/
var firstUniqChar = function(s) {
    let map = new Map();

    for(let i = 0; i < s.length; i++) {
        let count = map.get(s[i]) || 0;
        map.set(s[i], count + 1);
    }

    for(let i = 0; i < s.length; i++) {
        if(map.get(s[i]) == 1) {
            return i;
        }
    }
    return -1
};

console.log(firstUniqChar('leetcode'))