class UF {
    private int count;
    private int[] parent;
    // 额外使用一个size数组，记录每棵树包含的节点数，我们不妨称为「重量」
    private int[] size;

    public UF(int n) {
        this.count = n;
        parent = new int[n];
        size = new int[n];
        for(let i = 0; i < n; i++) {
            parent[i] = i;
            size[i] = 1;
        }
    }

    /* 连接 p、q */
    public void union(int p, int q) {
        int rootP = find(p);
        int rootQ  = find(q);
        if (rootP == rootQ) {
            return
        }

        // 小树接到大树，较平衡
        if (size[rootP] > size[rootQ]) {
            parent[rootQ] = rootP;
            size[rootP] += size[rootQ];
        } else {
            parent[rootP] = rootQ;
            size[rootQ] += size[rootP];
        }

        count--
    }

    /* 判断是否连接成功 */
    public boolean connected(int p, int q) {
        int rootP = find(p);
        int rootQ = find(q);

        return rootP == rootQ
    }

    /* 返回某个节点 x 的根节点 */
    private int find(int x) {
        while(parent[x] != x) {
            // 进行路径压缩
            parent[x] = parent[parent[x]];
            x = parent[x];
        }
        return x;
    }

    /* 返回当前的连通分量个数 */
    public int count() {
        return count;
    }
}