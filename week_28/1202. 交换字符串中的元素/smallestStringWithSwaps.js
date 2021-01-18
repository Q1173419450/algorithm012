/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
  if (pairs.length == 0) return s;

  let len = s.length;
  let ans = new Array(len);
  let unionFind = new UnionFind(len);
  for(const pair of pairs) {
    let index1 = pair[0];
    let index2 = pair[1];
    unionFind.union(index1, index2);
  }

  // console.log(unionFind.parent);

  let map = new Map();
  for(let i = 0; i < len; i++) {
    let root = unionFind.find(i);
    if(!map.has(root)) map.set(root, []);
    // map.get(root).push(i);
    // map.get(root).push(s[i]);
  }
  // 分组索引
  // map.forEach(v => {
  //   const n = v.slice().sort((a, b) => s.charCodeAt(a) - s.charCodeAt(b));
  //   for(let j = 0; j < v.length; j++) ans[v[j]] = s[n[j]];
  // })

  // return ans.join('');


  // sort
  map.forEach((v, i) => {
    map.set(i, v.sort((a, b) => b.charCodeAt() - a.charCodeAt()))
  });

  for(let i = 0; i < s.length; i++) {
    const root = unionFind.find(i);
    r += map.get(root).pop();
  }
  return r;
};

class UnionFind {
  constructor(n) {
    this.parent = new Array(n);
    this.rank = new Array(n).fill(1);
    for(let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  union(x, y) {
    let rootX = find(x);
    let rootY = find(y);

    if (rootX == rootY) return;
    if (rank[rootX] == rank[rootY]) {
      parent[rootX] = rootY;
      rank[rootY]++;
    } else if (rank[rootX] < rank[rootY]) {
      parent[rootX] = rootY;
    } else {
      parent[rootY] = rootX;
    }
  }

  find(x) {
    if (x != parent[x]) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }
}