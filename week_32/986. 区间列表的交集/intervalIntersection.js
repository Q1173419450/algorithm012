/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
  let i = 0;
  let j = 0;
  let ans = [];
  while (i < firstList.length && j < secondList.length ) {
    let left = Math.max(firstList[i][0], secondList[j][0]);
    let right = Math.min(firstList[i][1], secondList[j][1]);
    if (left <= right) ans.push([left, right]);
    
    firstList[i][1] < secondList[j][1] ? i++ : j++
  }
  return ans;
};