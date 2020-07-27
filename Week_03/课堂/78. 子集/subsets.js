/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let res = [];

  dfs(res, nums, [] , 0);

  return res;
};

function dfs(res, nums, tmp, index) {
  if(index == nums.length){ // terminator
    return res.push(tmp.slice());
  }

  dfs(res, nums, tmp, index + 1); // not pick the number

  tmp.push(nums[index]);

  dfs(res, nums, tmp, index + 1); // pick the number

  // reverse the current state
  tmp.pop();
}

console.log(subsets([1,2,3]))