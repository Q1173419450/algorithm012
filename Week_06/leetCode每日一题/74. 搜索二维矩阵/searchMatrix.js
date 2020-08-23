/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length == 0) return false;

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == target) {
                return true
            }
        }
    }

    return false;
};

var searchMatrix = function(matrix, target) {
    if (matrix.length == 0) return false;
    let n = matrix.length;
    let m = matrix[0].length;
    
    let left = 0, right = n * m - 1;
    while(left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        let res = matrix[Math.floor(mid / m)][(mid % m)];

        if (res == target) return true
        else if (res > target) right = mid - 1;
        else left = mid + 1
    }

    return false;
}

let matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]

let target = 3;

// matrix = [
//     [1,   3,  5,  7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 50]
//   ]
// let target = 13

console.log(searchMatrix(matrix, target))