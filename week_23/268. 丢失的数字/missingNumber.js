/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let gaosiNum = Math.floor((nums.length * (nums.length + 1)) / 2);

  let allNum = 0;
  for(let num of nums) {
    allNum += num;
  }

  return allNum - gaosiNum;
};

/* 位运算 */
var missingNumber = function(nums) {
  let missing = nums.length;
  for(let i = 0; i < nums.length; i++) {
    console.log(i, nums[i] ,i ^ nums[i], missing)
    missing ^= i ^ nums[i]
  }
  return missing;
}

missingNumber([3,0,1]);