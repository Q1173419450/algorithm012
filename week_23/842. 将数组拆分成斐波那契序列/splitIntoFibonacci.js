/**
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function(S) {
  const list = [];
  let len = S.length;
  let start = 0;
  dfs(list, S, len, start);

  return list;
};

var dfs = (list, S, len, start) => {
  if (start == len && list.length > 2) return true;

  for(let i = start; i < len; i++) {
    let segment = S.substring(start, i + 1);
    
    /* 防止开头位 0 */
    if(segment.length > 1 && segment[0] === '0') break;
    /* 数组超过范围 */
    if (Number(segment) > Math.pow(2, 31) - 1) break;
    if(isFib(Number(segment), list)) {
      list.push(Number(segment));

      if (dfs(list, S, len, i + 1)) return true;
      list.pop();
    }
  }

  return false
}

var isFib = (num, list) => {
  let size = list.length;
  if (size < 2) return true;
  return (list[size - 2] + list[size - 1] == num);
}

let S = "1011"
console.log(splitIntoFibonacci(S));