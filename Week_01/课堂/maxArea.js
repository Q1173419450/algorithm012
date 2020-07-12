/**
 * 11. 盛最多水的容器
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * @param {number[]} height
 * @return {number}
 */

/* 枚举 left，right */
/* O(n^2) */
/* 不能是单个矩形大小 */
var maxArea = function(height) {
  let max = 0;
  for(let i = 0; i < height.length; i++) {
    for(let j = i + 1; j < height.length; j++) {
      let area = (j - i) * Math.min(height[i], height[j]);
      max = Math.max(max, area);
    }
  }

  return max;
};

/* 左右边界收敛， 双指针 */
// var maxArea = function(height) {
//   let max = 0;
//   for(let i = 0, j = height.length - 1; i < j;) {
//     let minHeight = height[i] < height[j] ? height[i ++] : height[j --];  // 谁更小就往里面挪动
//     let area = (j - i + 1) * minHeight;
//     max = Math.max(max, area);
//   }

//   return max;
// };

console.log(maxArea([2,1,5,6,2,3]))