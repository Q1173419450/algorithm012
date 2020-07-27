/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
/* 
  https://leetcode-cn.com/problems/combinations/solution/hui-su-suan-fa-jian-zhi-python-dai-ma-java-dai-ma-/
*/
var combine = function(n, k) {
  let res = [];
  if(n <= 0 || k <= 0 || n < k) {
    return res
  }

  findCombinations(res, n, k, 1, []);

  return res;
};

function findCombinations(res, n, k, begin, tmp) {
  if(tmp.length == k) {
    res.push(tmp.slice());

    return
  }

  for(let i = begin; i <= n; i++) {
    tmp.push(i);

    findCombinations(res, n, k, i + 1, tmp);

    tmp.pop();
  }
}