## 200. 岛屿数量

https://leetcode-cn.com/problems/number-of-islands/solution/dao-yu-lei-wen-ti-de-tong-yong-jie-fa-dfs-bian-li-/

寻路

原理：从开始向四个方向搜索，接触到海洋则结束，遍历过的也结束，最终就可以返回岛屿数量

- 先想到这个题目肯定要遍历所有节点，所以使用广度和深度优先搜索
- 然后就是想到DFS & BFS 模板
- 转化为对应当前场景的优先搜索
- 岛屿问题的重复遍历（标记遍历过的格子）