/**
 * @param {string[]} equations
 * @return {boolean}
 */
/* 超哥的视频 */
/* https://www.bilibili.com/video/BV13t411v7Fs?from=search&seid=7053335676406216907 */
class UnionFind {
  constructor(num) {  // num 顶点个数
    this.roots = new Array(num).fill(-1);
    this.ranks = new Array(num).fill(0);
  }
  findRoot(x) { // 找出顶点x的根节点
    let x_root = x;
    while(this.roots[x_root] !== -1) {
      x_root = this.roots[x_root];
    }
    return x_root;
  }

  union(x, y) { // 把顶点x和顶点y所在的集合合并到一起
    let x_root = this.findRoot(x);
    let y_root = this.findRoot(y);
    if (x_root === y_root) return
    /* 并查集优化 */
    let x_rank = this.ranks[x_root]
    let y_rank = this.ranks[y_root]
    // 哪个树高，就将另外一棵树合并过去
    if(x_rank < y_rank) { 
      this.roots[x_root] = y_root;
    } else if (x_rank < y_rank) {
      this.roots[y_root] = x_root;
    } else {
      this.roots[y_root] = x_root;
      this.ranks[x_root]++
    }
  }
}

/* 并查集 */
var equationsPossible = function(equations) {
  let uf = new UnionFind(26);
  let codePointA = 'a'.codePointAt(0);
  for(let equation of equations) {
    if (equation[1] === '=') uf.union(equation.codePointAt(0) - codePointA, equation.codePointAt(3) - codePointA);
  }

  for(let equation of equations) {
    if (equation[1] === '!' && uf.findRoot(equation.codePointAt(0) - codePointA) == uf.findRoot(equation.codePointAt(3) - codePointA)) return false
  }
  return true
};

equationsPossible(["a==b","b!=a"])