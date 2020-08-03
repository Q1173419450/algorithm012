## 学习笔记

### 深度优先搜索 & 广度优先搜素

基于 `图` 这种数据结构

> BFS

借用栈来实现

```js
function bfs = (root) => {
  let result = [];
  let queue = [root];

  while(queue.length > 0) {
    let level = [];
    let n = queue.length;
    for(let i = 0; i < n; i++) {
      let node = queue.pop();
      level.push(node.val);
      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
    }

    result.push(level)
  }

  return result;
}
```

visited: 是用来记录已经被访问的顶点

queue: 是一个队列，用来存储已经被访问、但相连的顶点还没有被访问的顶点。

> DFS

假设你站在迷宫的某个岔路口，然后想找到出口。你随意选择一个岔路口来走，走着走着发现走不通的时候，你就回退到上一个岔路口，重新选择一条路继续走，直到最终找到出口。

- 递归实现

```js
const visited = new Set();
const dfs = node => {
  if (visited.has(node)) return

  visited.add(node);

  dfs(node.left);
  dfs(node.right);
}
```

### 贪心算法

贪心算法有很多经典的应用，比如霍夫曼编码（Huffman Coding）、Prim 和 Kruskal 最小生成树算法、还有 Dijkstra 单源最短路径算法。

> 第一步，当我们看到这类问题的时候，首先要联想到贪心算法：针对一组数据，我们定义了 `限制值` 和 `期望值`，希望从中选出几个数据，在满足限制值的情况下，`期望值最大`。

> 第二步，我们尝试看下这个问题是否可以用贪心算法解决：每次选择当前情况下，在对限制值同等贡献量的情况下，对期望值贡献最大的数据。

> 第三步，我们举几个例子看下贪心算法产生的结果是否是最优的，且前面的选择，不会会影响后面的选择。大部分情况下，举几个例子验证一下就可以了。

### 二分查找（Binary Search）

针对有序数据集合的查找算法

```js
function BSearch(nums, value) {
  let low = 0;
  let high = nums.length - 1;

  while(low <= high) {
    let mid = Math.floor(left + ((right - left) >> 1));

    if (nums[mid] == value) {
      return mid;
    } else if (num[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}
```

> 二分查找应用场景的局限性

- 二分查找依赖的是顺序表结构，简单点说就是数组
- 二分查找针对的是有序数据
- 数据量太小不适合二分查找

> 变体

分查找更适合用在“近似”查找问题，在这类问题上，二分查找的优势更加明显。比如今天讲的这几种变体问题，用其他数据结构，比如散列表、二叉树，就比较难实现了。

- 变体一：查找第一个值等于给定值的元素

在有重复值的数组中，找到第一个等于给定值的元素

```js
function BSearch(nums, value) {
  let low = 0;
  let high = nums.length - 1;

  while(low <= high) {
    let mid = Math.floor(left + ((right - left) >> 1));

    if (nums[mid] == value) {
      if (mid == 0 || a[mid - 1] != value) return mid
      else high = mid - 1;
      return mid;
    } else if (num[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

let arr = [1, 3, 4, 5, 6, 8, 8, 8, 11, 18];
```

- 变体二：查找最后一个值等于给定值的元素
- 变体三：查找第一个大于等于给定值的元素
- 变体四：查找最后一个小于等于给定值的元素
