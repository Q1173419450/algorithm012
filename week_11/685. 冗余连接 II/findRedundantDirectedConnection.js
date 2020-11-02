/**
 * @param {number[][]} edges
 * @return {number[]}
 */
/* 构成环，去掉多余的边 */
var findRedundantDirectedConnection = function(edges) {
    // 边的个数
    let len = edges.length;

    // 预处理入度数组（记录指向某个结点的边的条数）
    let inDegree = new Array(len + 1).fill(0);
    for(let edge of edges) {
        inDegree[edge[1]]++
    }

    // 入度为 2 的边，看是否形成环
    for(let i = len - 1; i >= 0; i--) {
        if (inDegree[edges[i][1]] == 2) {
            console.log(inDegree[edges[i][1]])
            // 如果不构成环，这条边就是要去掉的那条边
            if (!judgeCircle(edges, len, i)) {
                return edges[i];
            }
        }
    }

    // 步骤 3：再尝试删除构成入度为 1 的边，看看是否形成环
    for(let i = len - 1; i >= 0; i--) {
        if (inDegree[edges[i][1]] == 1) {
            // 如果不构成环，这条边就是要去掉的那条边
            if (!judgeCircle(edges, len, i)) {
                return edges[i];
            }
        }
    }

    return false
};

/* 判断是否构成环 */
function judgeCircle(edges, len, removeEdgeIndex) {
    let unionFind = new UnionFind(len + 1);

    for(let i = 0; i < len; i++) {
        if (i == removeEdgeIndex) continue;
        
        if (!unionFind.union(edges[i][0], edges[i][1])) {
            return true;
        }
    }

    return false;
}

/* 判断是否联通，图论模板 */
class UnionFind {
    constructor(len) {
        /* 元节点 */
        this.parent = new Array(len);
        for(let i = 0; i < len; i++) {
            this.parent[i] = i;
        }
    }

    find(x) {
        while(x != this.parent[x]) {
            // 路径压缩（隔代压缩）
            this.parent[x] = this.parent[this.parent[x]];
            x = this.parent[x];
        }
        return x
    }

    /* 路径压缩 */
    union(x, y) {
        let rootX = this.find(x);
        let rootY = this.find(y);

        if(rootX == rootY) return false;

        this.parent[rootX] = rootY;
        return true
    }
}

let arr = [[1,2],[1,3],[2,3]]

console.log(findRedundantDirectedConnection(arr))