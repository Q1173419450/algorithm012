/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
// 时间复杂度较高
// var smallestDifference = function(a, b) {
//     let min = Infinity;
//     for(let i = 0; i < a.length; i++) {
//         for(let j = 0; j < b.length; j++) {
//             let num = Math.abs(a[i] - b[j]);
//             min = Math.min(min, num);
//         }
//     }
//     return min;
// };

var smallestDifference = function(a, b) {
  a = a.sort((x, y) => x - y);
  b = b.sort((x, y) => x - y);

  let i = 0;
  let j = 0;
  let min = Infinity;
  while (i < a.length && j < b.length) {
    min = Math.min(min, Math.abs(a[i] - b[j]));
    a[i] > b[j] ? j++ : i++;
  }
  return min;
}

let a = [1, 3, 15, 11, 2];
let b = [23, 127, 235, 19, 8];
smallestDifference(a, b)  // 11 8 => 3