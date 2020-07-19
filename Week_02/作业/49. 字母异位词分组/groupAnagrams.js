/**
 * @param {string[]} strs
 * @return {string[][]}
 */
/* hash map */
var groupAnagrams = function (strs) {
  let obj = {};
  let promises = [3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103];

  for(let i = 0; i< strs.length; i++) {
    const str = strs[i];
    const hash = str.split('').reduce((sum, s) => { // 利用素数相加是否相等来进行归类
      return sum * promises[s.charCodeAt(0) - 97];
    }, 1)

    obj[hash] ? obj[hash].push(str) : obj[hash] = [str];
  }

  return Object.values(obj);
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])