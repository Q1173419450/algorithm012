/**
 * @param {number[][]} intervals
 * @return {number}
 */
/* Interval Scheduling（区间调度问题） */
var eraseOverlapIntervals = function(intervals) {
  if (!intervals.length) return intervals;
  intervals = intervals.sort((a,b) => a[1] - b[1]);
  let count = 1;
  let end = intervals[0][1];
  for(let interval of intervals) {
    let start = interval[0];
    if (start >= end) {
      count++
      end = interval[1];
    }
  }

  return intervals.length - count;
};

let arr = [[1,2],[2,3]];

let count = eraseOverlapIntervals(arr)
console.log(count);