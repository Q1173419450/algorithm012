/**
 * @param {number[][]} isConnected
 * @return {number}
 */
/* dfs */
var findCircleNum = function(isConnected) {
  let n = isConnected.length;
  let map = new Array(n).fill(false);
  let count = 0;
  for(let i = 0; i < n; i++) {
    if (!map[i]) {
      dfs(i, isConnected, map);
      count++;
    }
  }
  return count;
};

var dfs = function(i, isConnected, map) {
  map[i] = true;

  for(let j = 0; j < isConnected.length; j++) {
    if (!map[j] && isConnected[i][j] == 1) {
      dfs(j, isConnected, map);
    }
  }
}

/* bfs */
var findCircleNum = function(isConnected) {
  let n = isConnected.length;
  let visited = new Array(n).fill(false);

  let count = 0;

  let queue = [];
  for(let i = 0; i < n; i++) {
    if (!visited[i]) {
      count++;
      queue.push(i);
      while (queue.length) {
        const node = queue.shift();
        visited[node] = true;
        for(let k = 0; k < n; k++) {
          if (isConnected[node][k] == 1 && !visited[k]) {
            queue.push(k);
          }
        }
      }
    }
  }

  return count;
}

/* 并查集 */
class UnionFind {
  constructor(n) {
    this.root = new Array(n).fill(0);
    for(let i = 0; i < n; i++) {
      this.root[i] = i;
    }
    this.size = n;
  }

  find(i) {
    if (i == this.root[i]) return i;
    return this.root[i] = find(this.root[i]);
  }

  union(p, q) {
    let pRoot = find(p);
    let qRoot = find(q);

    if (pRoot != qRoot) {
      this.root[pRoot] = qRoot;
      size--;
    }
  }
}

var findCircleNum = function(isConnected) {
  let n = isConnected.length;
  let uf = new UnionFind(n);

  for(let i = 0; i < n; i++) {
    for(let j = i + 1; j < n; j++) {
      if (isConnected[i][j] == 1) {
        uf.union(i, j);
      }
    }
  }
  return uf.size;
}