/* 暴力求解 */
var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }

  return false
}

/* hash map */
var twoSum = function(nums, target) {
  let obj = {};
  for(let i = 0; i < nums.length; i++) {
    let ans = target - nums[i];
    if(obj[ans] != undefined) {
      return [obj[ans], i]
    } else {
      obj[nums[i]] = i;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9));