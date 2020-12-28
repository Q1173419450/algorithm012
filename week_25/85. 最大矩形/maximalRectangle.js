/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if (matrix.length == 0) return 0;
  let heights = new Array(matrix[0].length).fill(0);
  let maxArea = 0;
  for(let row = 0; row < matrix.length; row++) {
    for(let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] == '1') {
        heights[col] += 1;
      } else {
        heights[col] = 0;
      }
    }
    maxArea = Math.max(maxArea, largestRectangleArea(heights));
  }
  return maxArea;
};

var largestRectangleArea = function(height) {
  let max = 0;
  for(let i = 0; i < height.length; i++) {
    let minHeight = Number.MAX_SAFE_INTEGER;
    for(let j = i; j < height.length; j++) {
      minHeight = Math.min(minHeight, height[j]);
      max = Math.max(max, (j - i + 1) * minHeight);
    }
  }
  return max;
};
let arr = [
  ["0","1"],
  ["1","0"]
]