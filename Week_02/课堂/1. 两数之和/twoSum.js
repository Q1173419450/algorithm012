/* 
  时间复杂度：9
*/
function twoSum(nums, target) {
  let obj = {}

  for(let i = 0; i < nums.length; i++) {
    let ans = target - nums[i];
    if (obj[ans] != undefined) {
      return [obj[ans], i]
    }
    obj[nums[i]] = i;
  }
}

console.log(twoSum([2, 7, 11, 15], 9))