/**
 * @param {character[][]} grid
 * @return {number}
 */
// let directions = [
//     [-1, 0],
//     [0, -1],
//     [1, 0],
//     [0, 1]
// ]
var numIslands = function(grid) {

    let rows = grid.length;
    let cols = grid[0].length;

    let count = 0;

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if (grid[i][j] == '1') {
                count ++
                dfs(grid, i, j);
            }
        }
    }

    return count
};

function dfs(grid, i, j) {
    if (!inArea(grid, i, j)) {
        return 0
    }

    if (grid[i][j] != 1) {
        return 0;
    }
    
    grid[i][j] = '2';

    // for(let i = 0; i < 4; i++) {
    //     console.log(directions[i][0], directions[i][1])
    //     let newX = i + directions[i][0];
    //     let newY = j + directions[i][1];

    //     console.log(newX, newY)

    //     dfs(grid, newX, newY);
    // }
    dfs(grid, i - 1, j);
    dfs(grid, i + 1, j);
    dfs(grid, i, j - 1);
    dfs(grid, i, j + 1);
}

function inArea(grid, x, y) {
    return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
}

let arr = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0']
]

console.log(numIslands(arr))