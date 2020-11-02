/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
/* 栈 */
var backspaceCompare = function(S, T) {
    return build(S) === build(T);
};

var build = function(strs) {
  var stack = [];
  for(let str of strs) {
    if (str != '#') {
      stack.push(str);
    } else {
      if (stack.length) {
        stack.pop();
      }
    }
  }
  return stack.join('');
}

/* 双指针 */
var backspaceCompare = function(S, T) {
  let SLen = S.length - 1;
  let TLen = T.length - 1;
  let SkipS = 0;
  let SkipT = 0;

  while(SLen >= 0 || TLen >= 0) {
    while(SLen >= 0) {
      if (S.charAt(i) === '#') {  // 当前字符为 #
        SkipS++;
        SLen--
      } else if (SkipS > 0) { // 当前字符不为 #, 且 # > 0
        SkipS--;
        SLen--
      } else {  // 当前为字符
        break
      }
    }
    
    while(TLen >= 0) {
      if (T.charAt(i) === '#') {
        SkipT++;
        TLen--
      } else if (SkipT > 0) {
        SkipT--;
        TLen--
      } else {
        break
      }
    }
  
    if(SLen >= 0 && TLen >= 0) {
      if(S.charAt(SLen) != T.charAt(TLen)) return false
    } else {
      console.log(S.charAt(SLen), T.charAt(TLen))
      if(SLen >= 0 || TLen >= 0) return false
    }
  
    SLen--;
    TLen--;
  }
  return true;
}

let S = 'ab#c';
let T = 'ad#c';
backspaceCompare(S, T);