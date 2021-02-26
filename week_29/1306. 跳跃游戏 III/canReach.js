/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
/* dfs */
var canReach = function (arr, start) {
  let visited = {};
  return dfs(start, arr, visited);
};

var dfs = (start, arr, visited) => {
  if (start < 0 || start > arr.length - 1 || visited[start]) return false;
  if (arr[start] == 0) return true;
  visited[start] = true;
  return dfs(start - arr[start], arr, start) || dfs(start + arr[start], arr, start)
}

/* bfs */
var canReach = function (arr, start) {
  let n = arr.length;
  let visited = {};
  let queue = [start];
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      let curValue = arr[node];
      if (curValue == 0) return true;
      let leftPos = node - curValue;
      console.log(leftPos)
      if (leftPos >= 0 && !visited[leftPos]) {
        visited[leftPos] = true;
        queue.push(leftPos);
      }
      let rightPos = node + curValue;
      if (rightPos < n && !visited[rightPos]) {
        visited[rightPos] = true;
        queue.push(rightPos);
      }
    }
    return false;
  }
}
let arr = [4, 2, 3, 0, 3, 1, 2],
  start = 5
let res = canReach(arr, start);
console.log(res);