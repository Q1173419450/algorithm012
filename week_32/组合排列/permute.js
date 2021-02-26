/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let res = [];
  let visited = Array.from(nums.length).fill(0);

  helper(res, nums, [], visited)

  return res;
};

function helper(res, nums, tmp, visited) {
  if(nums.length === tmp.length) {
      res.push(tmp.slice());

      return
  }

  for(let i = 0; i < nums.length; i++) {
      if (visited[i]) continue;

      visited[i] = true;
      tmp.push(nums[i])

      helper(res, nums, tmp, visited);

      visited[i] = false;
      tmp.pop()
  }
}

let arr = [ ['a', 'b'], ['苹果', '梨', '香蕉'], ['红', '黑'] ]
var permute = function(nums) {
  let res = [];
  let death = 0;

  dfs(res, nums, [], death);

  console.log(res);
  return res;
}

var dfs = function (res, nums, temp, death) {
  console.log(death, temp)
  if (temp.length == nums.length) {
    res.push(temp.slice().join('-'));
    return
  }
  let listLen = nums[death];
  for(let i = 0; i < listLen.length; i++) {
    temp.push(listLen[i]);
    dfs(res, nums, temp, death+1);

    death -= 1;
    temp.pop();
  }
}

permute(arr);