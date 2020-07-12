/* 
  84. 柱状图中最大的矩形
  给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。求在该柱状图中，能够勾勒出来的矩形的最大面积。
*/

/* 可以是单个矩形的大小 */

var largestRectangleArea = function(height) {
  let max = 0;
  for(let i = 0; i < height.length; i++) {
    let minHeight = Number.MAX_SAFE_INTEGER;
    for(let j = i; j < height.length; j++) {
      minHeight = Math.min(height[i], height[j]);
      max = Math.max(max, (j - i + 1) * minHeight);
      console.log((j - i + 1), minHeight, max)
    }
  }

  return max;
};

// console.log(largestRectangleArea([]));
// console.log(largestRectangleArea([1, 1]))
console.log(largestRectangleArea([2,1,5,6,2,3]))