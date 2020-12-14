/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let res = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      res = Math.max(res, height[left] * (right - left))
      left++
    } else {
      res = Math.max(res, (right - left) * height[right])
      right--
    }
  }

  return res;
};

let arr = [2,3,4,5,18,17,6];
maxArea(arr);