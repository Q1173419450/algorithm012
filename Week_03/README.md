## 学习

### 递归

- 终止条件
- 处理当前逻辑
- 下探到下一层
- 清理当前层数据（一些全局参数）

> 思维要点

- 不要人肉递归
- 最近重复子问题
- 数学归纳法

```js
function recur(level, param) {
    // 递归终止条件
    if (level > Max_LEVEL) {
        return
    }

    // 处理当前层逻辑
    process(level, param);

    // 下探下一层
    recur(level, newParam)

    // 恢复当前层状态
}
```

### 分治算法

分治算法是一种处理问题的思想，递归是一种编程技巧。

> 分治每层处理的逻辑为
  
- 分解：将原问题分解成一系列子问题；
- 解决：递归地求解各个子问题，若子问题足够小，则直接求解；
- 合并：将子问题的结果合并成原问题。

> 解决的问题

```js
const divide_conquer = (problem, params) => {
    // 递归终止条件
    if (problem == null) {
        process_result
        return
    }

    subProblems = split_problem(problem, data);
    subResult1 = divide_conquer(subProblems[0], p1);
    subResult2 = divide_conquer(subProblems[1], p1);
    subResult3 = divide_conquer(subProblems[2], p1);

    // 合并
    result = process_result(subResult1, subResult2, subResult3);

    // 保存当前层状态
}
```

### 回溯

算法思想

每个阶段，我们都会面对一个岔路口，我们先随意选一条路走，当发现这条路走不通的时候（不符合期望的解），就回退到上一个岔路口，另选一种走法继续走。

回溯算法本质上就是枚举，优点在于其类似于摸着石头过河的查找策略，且可以通过剪枝少走冤枉路。它可能适合应用于缺乏规律，或我们还不了解其规律的搜索场景中。

> 经典问题

N皇后

0 - 1 背包

正则表达式