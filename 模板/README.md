## 递归回溯模板

```
function backtrack(temp, nums, result) {
    if 满足条件
        result.add(temp)
        return
    for(let nums in nums) {
        做选择

        backtrack(temp, nums, result);

        撤销选择
    }
}
```