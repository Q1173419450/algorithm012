/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let res = [];
  let visited = new Array(nums.length).fill(0);

  nums = nums.sort((a, b) => a - b);

  helper(res, nums, [], visited);

  return res;
};

function helper(res, nums, tmp, visited) {
  if (tmp.length == nums.length) {
    res.push(tmp.slice());

    return;
  }

  for(let i = 0; i < nums.length; i++) {
    if (visited[i]) continue;
    
    // 剪枝条件：i > 0 是为了保证 nums[i - 1] 有意义
    // 写 !used[i - 1] 是因为 nums[i - 1] 在深度优先遍历的过程中刚刚被撤销选择
    if (i > 0 && nums[i] == nums[i - 1] && !visited[i - 1]) {
      continue;
    }

    visited[i] = true;

    tmp.push(nums[i]);
    
    helper(res, nums, tmp, visited);

    visited[i] = false;
    tmp.pop()
  }
}