/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/* 暴力 */
var subarraySum = function(nums, k) {
  let len = nums.length;
  let count = 0;
  for(let left = 0; left < len; left++) {
    let sum = 0;
    for(let right = left; right < len; right++) {
      sum += nums[right];

      if (sum == k) {
        count++
      }
    }
  }

  return count
};

/* 
  前缀和
*/
var subarraySum = function(nums, k) {
  let len = nums.length;
  let preSum = [0];

  for(let i = 0; i < len; i++) {
    preSum[i + 1] = preSum[i] + nums[i];
  }
  let count = 0;

  for(let left = 0; left < len; left++) {
    for(let right = 0; right < len; right++) {
      if (preSum[right + 1] - preSum[left] == k) {
        count++
      }
    }
  }

  return count
}

var subarraySum = function(nums, k) {
  let map = new Map();

  map.set(0, 1);

  let preNum = 0;
  let count = 0;

  for(let num of nums) {
    preNum += num;

    if(map.has(preNum - k)) {
      count += map.get(preNum - k);
    }

    if (map.has(preNum)) {
      map.set(preNum, map.get(preNum) + 1);
    } else {
      map.set(preNum, 1)
    }
  }

  console.log(map)

  return count;
}

console.log(subarraySum([1, 2, 1], 2));