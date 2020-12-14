/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let ans = [];
  let flag = false;
  for(let i = 0; i < intervals.length; i++) {
    if (newInterval[0] > intervals[i][1]) {
      ans.push(intervals[i]);
      continue;
    }

    if (newInterval[1] < intervals[i][0]) {
      ans.push(newInterval);
      flag = !flag;
      for(let i = 0; i < intervals.length; i++) { // 只循环需要的
        ans.push(intervals[i]);
      }
      break;
    }
    newInterval[0] = Math.min(newInterval[0], intervals[i][0])
    newInterval[1] = Math.max(newInterval[1], intervals[i][1])
  }
  if (!flag) {
    ans.push(newInterval);
  }
  console.log(ans)
  return ans;
};

/* 
  如果newInterval[0] > intervals[i][1]
  如果newInterval[1] < intervals[i][0]
  3.此区间和新区间有交集，合并区间
  newInterval[0] = min(newInterval[0], intervals[i][0]);
  newInterval[1] = max(newInterval[1], intervals[i][1]);
*/

let intervals = [[1,3],[6,9]]
let newInterval = [2,5];
insert(intervals, newInterval)