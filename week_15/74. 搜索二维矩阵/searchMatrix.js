/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let n = matrix.length;
  let m = matrix[0].length;

  let left = 0, right = n * m - 1;
  while(left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let res = matrix[Math.floor(mid / m)][(mid % m)];

    console.log(res)

    if(res === target) return true
    else if (res > target) right = mid - 1;
    else left = mid + 1
  }

  return false
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 13))