/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  if (nums.length == 0) return nums 
  let res = [];
  let visited = new Array(nums.length).fill(0);

  backtrack(res, nums, [], visited);

  return res
};

function backtrack(res, nums, tmp, visited) {
  if (tmp.length == nums.length) {
    console.log(tmp)
    res.push(tmp.slice())

    return
  }

  for(let i = 0; i < nums.length; i++) {
    if (visited[i] == 1) continue;

    visited[i] = 1;

    tmp.push(nums[i]);
    backtrack(res, nums, tmp, visited);

    visited[i] = 0;
    tmp.pop();
  }
}

console.log(permute([1,2,3]))