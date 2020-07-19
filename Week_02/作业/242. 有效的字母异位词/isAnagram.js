/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/* api localeCompare */
var isAnagram = function(s, t) {
  let s1 = s.split('').sort((a, b) => a.localeCompare(b)).join('');
  let t1 = t.split('').sort((a, b) => a.localeCompare(b)).join('');

  return s1 === t1;
}

/* 暴力解法 */

/* hash map */
/* 
  map 也是没有顺序，访问哪个值就是哪个值
*/
var isAnagram = function(s, t) {
  var map = new Map();
  for(let i = 0; i < s.length; i++) {
    let getMap = map.get(s[i])
    if (!getMap) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], getMap + 1);
    }
  }

  for(let i = 0; i < t.length; i++) {
    let getMap = map.get(t[i]);
    if (getMap === 1) {
      map.delete(t[i]);
    } else if (getMap) {
      map.set(t[i], getMap - 1)
    } else {
      map.set(t[i], 1);
    }
  }

  if (map.size) {
    return false
  } else {
    return true;
  }
}


console.log(isAnagram('anagram', 'nagaram'));
// console.log(isAnagram('rat', 'car'));