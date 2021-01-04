/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  let len = T.length;
  let res = [];
  for(let i = 0; i < len; i++) {
    let current = T[i];
    for(let j = i + 1; j < len; j++) {
      if (T[j] > current) {
        let index = j - i;
        res.push(index);
        break;
      }
    }
  }
  return res;
};

var dailyTemperatures = function(T) {
  let n = T.length;
  let res = new Array(n).fill(0);
  let st = [];

  for(let i = n - 1; i >= 0; i--) {
    while (st.length && T[i] >= T[st.pop()]) {
      st.pop();
    }
    if(st.length) {
      res[i] = stack.pop() - i;
    }
    st.push(i);
  }

  return res;
}