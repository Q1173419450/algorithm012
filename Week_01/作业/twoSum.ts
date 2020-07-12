function twoSum(nums: number[], target: number): number[] {
  if (nums.length == 0) return [];
  let obj: any = {};
  for (let i = 0; i < nums.length; i++) {
    let ans = target - nums[i];
    if (obj[ans] != undefined) {
      return [obj[ans], i];
    }
    obj[nums[i]] = i;
  }
  return [];
}

let res = twoSum([2, 7, 11, 15], 9);
console.log(res);
