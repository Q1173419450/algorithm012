/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let map = new Map();
  for(let char of t) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  let left = 0, right = 0;
  let ans_left = 0, ans_right = -1;
  let ans_len = Infinity;
  while(right < s.length) {
    let char_right = s.charAt(right);
    if(map.has(char_right)) {
      map.set(char_right, map.get(char_right) - 1);
      while(match(map)) {
        let temp_len = right - left +  1; // 窗口大小
        if(temp_len < ans_len) {
          ans_left = left;
          ans_right = right;
          ans_len = temp_len;
        }
        let key = s.charAt(left); // 左指针字母
        if(map.has(key)) {
          map.set(key, map.get(key) + 1);
        }
        left++
      }
    }
    right++
  }

  return s.substring(ans_left, ans_right + 1);
}

function match(map) {
  for (let value of map.values()) {
    if(value > 0) {
      return false
    }
  }

  return true;
}

let s = "ADOBECODEBANC";
let t = "ABC";
console.log(minWindow(s, t));

// var minWindow = function(s, t) {
//   let len = s.length;
//   let map = new Map();
//   let missingType = 0;
//   for(let char of t) {
//     if (map.has(char)) {
//       map.set(char, map.get(char) + 1);
//     } else {
//       missingType++;
//       map.set(char, 1);
//     }
//   }
//   let left = 0, right = 0;
//   for(;right < s.length; right++) {
//     let rightChar = s[right];
//     if (map.has(rightChar)) map.get(rightChar, map.get(rightChar) - 1);

//   }
// };