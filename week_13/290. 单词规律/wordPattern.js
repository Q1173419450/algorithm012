/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
/* 
map 判断
无法通过的case：abba 'dog dog dog dog'
*/
// var wordPattern = function(pattern, s) {
//   let map = new Map();
//   let strArr = s.split(' ');
//   if (pattern.length != strArr.length) {
//     return false
//   }

//   for(let i = 0; i < pattern.length; i++) {
//     let key = pattern.charAt(i);
//     if (map.has(key)) {
//       if (map.get(key) !== strArr[i]) return false
//     } else {
//       map.set(key, strArr[i]);
//     }
//   }

//   return true;
// };

/* 
  map && set 一起判断
*/
// var wordPattern = function(pattern, s) {
//   let map = new Map();
//   let set = new Set();
//   let strArr = s.split(' ');
//   if (pattern.length != strArr.length) {
//     return false
//   }

//   for(let i = 0; i < pattern.length; i++) {
//     let key = pattern.charAt(i);
//     if (map.has(key)) {
//       if (map.get(key) !== strArr[i]) return false
//     } else {
//       if (set.has(strArr[i])) return false
//       map.set(key, strArr[i]);
//       set.add(strArr[i])
//     }
//   }
//   return true;
// };

/* 双重判断 */
var wordPattern = function(pattern, s) {
  let strArr = s.split(' ');
  if (pattern.length != strArr.length) {
    return false
  }
  let patternArr = pattern.split('');
  return wordPatternHelper(strArr, patternArr) && wordPatternHelper(patternArr, strArr)
}

var wordPatternHelper = function(array1, array2) {
  let map = new Map();
  let len = array1.length;
  for(let i = 0; i < len; i++) {
    let key = array1[i];
    if (map.has(key)) {
      if (map.get(key) !== array2[i]) return false
    } else {
      map.set(key, array2[i])
    }
  }
  return true
}

console.log(wordPattern('abba', "dog cat cat dog"))
console.log(wordPattern('abba', "dog dog dog dog"))
