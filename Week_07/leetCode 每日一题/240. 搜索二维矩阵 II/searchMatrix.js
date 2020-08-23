/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function(matrix, target) {
//     let row = matrix.length - 1;
//     let col = 0;

//     while(row >= 0 && col < matrix[0].length) {
//         if (matrix[row][col] > target) {
//             row--
//         } else if(matrix[row][col] < target) {
//             col++
//         } else {
//             return true
//         }
//     }

//     return false
// };

var diagonalBinarySearch = function(matrix, diagonal, target) {
    let left = 0;
    let right = diagonal;

    while(left < right) {
        let mid = (left + right) >>> 1;

        if (matrix[mid][mid] < target) {
            left = mid + 1;
        } else {
            right = mid
        }
    }

    return left;
}

var rowBinarySearch = function(matrix, begin, cols, target) {
    let left = begin;
    let right = cols;

    while(left <= right) {
        let mid = (left + right) >>> 1;
        if (matrix[begin][mid] == target) {
            return true;
        } else if (matrix[begin][mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}

var colBinarySearch = function(matrix, begin, rows, target) {
    let left = begin + 1;
    let right = rows;

    while(left <= right) {
        let mid = (left + right) >>> 1;
        if (matrix[mid][begin] == target) {
            return true;
        } else if (matrix[mid][begin] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
}

var searchMatrix = function(matrix, target) {
    let rows = matrix.length;
    if (rows == 0) {
        return false;
    }

    let cols = matrix[0].length;
    if (cols == 0) {
        return false;
    }

    let minVal = Math.min(rows, cols);
    // 沿着对角线搜索第 1 个大于等于 target 的数的索引
    let index = diagonalBinarySearch(matrix, minVal - 1, target);
    if (matrix[index][index] == target) {
        return true;
    }

    for(let i = 0; i <= index; i++) {
        // 行搜索传入列总数 - 1
        let rowSearch = rowBinarySearch(matrix, i, cols - 1, target);
        // 列搜索传入行总数 - 1
        let colSearch = rowBinarySearch(matrix, i, rows - 1, target);

        if (rowSearch || colSearch) {
            return true;
        }
    }
    return false;
};

// const arr = [
//     [1,   4,  7, 11, 15],
//     [2,   5,  8, 12, 19],
//     [3,   6,  9, 16, 22],
//     [10, 13, 14, 17, 24],
//     [18, 21, 23, 26, 30]
//   ]
  
console.log(searchMatrix([[5],[6]], 6))