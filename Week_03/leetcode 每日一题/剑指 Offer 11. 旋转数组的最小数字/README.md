## 剑指 Offer 11. 旋转数组的最小数字

二分法

- 设置 ii, jj 指针分别指向 numbers 数组左右两端，mid = (i + j) / 2 为每次二分的中点
- 当 numbers[mid] > numbers[j], 则选转点在[mid + 1, j], 所以执行 i = mid + 1;
- 当 numbers[mid] < numbers[j], 则选转点在[i, mid],所以执行 j = mid;
- 当 numbers[mid] == numbers[j] 时： 无法判断 mid 在哪个排序数组中，即无法判断旋转点 xx 在 [i, mid] 还是 [mid + 1, j] 区间中。解决方案： 执行 j = j - 1 缩小判断范围

https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/solution/mian-shi-ti-11-xuan-zhuan-shu-zu-de-zui-xiao-shu-3/