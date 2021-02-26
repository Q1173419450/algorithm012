/**
 * @param {number} rowIndex
 * @return {number[][]}
 */
var getRow = function(rowIndex) {
  const ret = [];
  for(let i = 0; i < rowIndex.length; i++) {
    let row = new Array(i + 1).fill(1);
    for(let j = 1; j < row.length - 1; j++) {
      row[j] = ret[i - 1][j - 1] + ret[i - 1][j];
    }
    ret.push(row);
  }
  return ret[ret.length - 1];
};

var getRow = function(rowIndex) {
  let pre = [];
  for(let i = 0; i <= rowIndex; i++) {
    let cur = [];
    for(let j = 0; j <= i; j++) {
      cur.push(j == 0 || j == i ? 1 : (pre[j - 1] + pre[j]));
    }
    pre = cur;
  }
  return cur;
}

var getRow = function(rowIndex) {
  let pre = 1;
  let cur = [1];
  for(let i = 1; i < rowIndex; i++) {
    for(let j = 1; j < i; j++) {
      let temp = cur[j];
      cur[j] = pre + cur[j];
      pre = temp;
    }
    cur.push(1);
  }
  return cur;
}

var getRow = function(rowIndex) {
  let pre = 1;
  let ans = [1];
  for(let i = 1; i <= rowIndex; i++) {
    let cur = pre * ((N - i + 1) / i | 0);
    ans.push(cur);
    pre = cur;
  }
  return ans;
}