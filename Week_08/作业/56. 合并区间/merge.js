/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length == 0) {
        return [];
    }
    var res = [];
    intervals.sort((a, b) => {
        return a[0] - b[0];
    })

    console.log(intervals)

    res.push(intervals[0]);
    for(let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] > res[res.length - 1][1]) { // 当后一项的左边界<=前一项的右边界
            res.push(intervals[i]);
        } else {
            if (intervals[i][1] > res[res.length - 1][1]) { //如果后一项的右边界<=前一项右边界 就跳过不动 反之则进行上述方法合并
                res[res.length - 1][1] = intervals[i][1];
            }
        }
    }
    return res;
};

let intervals = [[1,3],[2,6],[8,10],[15,18]]
console.log(merge(intervals))