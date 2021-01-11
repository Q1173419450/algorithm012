/**
 * @param {number} n
 * @return {number}
 */
/* 暴力 dfs */
var numSquares = function(n) {
  return dfs(n);
};

var dfs = function(n) {
  if (n == 0) return 0;

  let count = Infinity;
  for(let i = 1; i * i <= n; i++) {
    count = Math.min(count, dfs(n - i * i) + 1);
  }
  return count;
}

/* dfs + map */
var numSquares = function(n) {
  let map = {};
  return dfs(n, map);
};

var dfs = (n, map) => {
  if (map[n]) return map[n];
  if (n === 0) return 0;

  let count = Infinity;
  for(let i = 1; i * i <= n; i++) {
    count = Math.min(count, dfs(n - i * i, map) + 1);
  }

  map[n] = count;
  return count;
}

/* dp */
var numSquares = function(n) {
  let dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for(let i = 1; i <= n; i++) {
    for(let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return dp[n];
}

/* bfs */
var numSquares = function(n) {
  let queue = [];
  let visited = {};

  let level = 0;
  queue.push(n);
  while (queue.length) {
    let size = queue.length;
    level++ // 层数
    for(let i = 0; i < size; i++) {
      let node = queue.pop();
      for(let j = 1; j * j <= node; j++) {
        let next = node - j * j;
        
        if (next == 0) return level;  // 为 0 的层数

        if(!visited[next]) {
          queue.push(next);
          visited[next] = next;
        }
      }
    }
  }
  return -1;
}