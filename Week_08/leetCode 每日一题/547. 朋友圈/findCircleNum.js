/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    let len = M.length;
    let uf = new UnionFind(len);

    for(let i = 0; i < len; i++) {
        for(let j = 0; j < i; j++) {
            if (M[i][j] == 1) {
                uf.union(i, j);
            }
        }
    }

    return uf.getCount();
};

class UnionFind {
    constructor(n) {
        this.count = n;
        this.parent = [];
        this.rank = [];
        for(let i = 0; i < n; i++) {
            this.parent[i] = i;
            this.rank[i] = 1;
        }
    }

    getCount() {
        return this.count;
    }

    find(p) {
        while(p != this.parent[p]) {
            this.parent[p] = this.parent[this.parent[p]];
            p = this.parent[p];
        }

        return p;
    }

    isConnected(p, q) {
        return this.find(p) == this.find(q);
    }

    union(p, q) {
        let rootP = this.find(p);
        let rootQ = this.find(q);

        if (rootP == rootQ) {
            return;
        }

        if(this.rank[rootP] > this.rank[rootQ]) {
            this.parent[rootQ] = rootP
        } else if(this.rank[rootP] < this.rank[rootQ]) {
            this.parent[rootP] = rootQ;
        } else {
            this.parent[rootQ] = rootP;
            this.rank[rootP]++
        }

        this.count--;
    }
}

let arr = [
    [1,1,0],
    [1,1,0],
    [0,0,1]
]

let arr1 = [
    [1,1,0],
    [1,1,1],
    [0,1,1]
]

console.log(findCircleNum(arr1));