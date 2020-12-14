/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  if (!points.length) return points;
  points = points.sort((a,b) => a[1] - b[1]);
  let counts = 1;
  let end = points[0][1]; // 第一个的结尾
  for(let point of points) {
    let start = point[0]; // 第n个的开头
    if(start > end) {
      counts++
      end = point[1];
    }
  }
  return counts;
};

let arr = [[10,16],[2,8],[1,6],[7,12]];
let count = findMinArrowShots(arr);
console.log(count);