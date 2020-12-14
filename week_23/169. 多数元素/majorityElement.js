/**
 * @param {number[]} nums
 * @return {number}
 */
/* hash  map */
var majorityElement = function(nums) {
  let Map = {};

  for(let i = 0; i < nums.length; i++) {
    if(Map[nums[i]]) {
      Map[nums[i]] += 1;
    } else {
      Map[nums[i]] = 1;;
    }
  }

  for(const map in Map) {
    if (Map[map] >= Math.round(nums.length / 2)) {
      return map
    }
  }

  return []
};

/* 排序 */
var majorityElement = function(nums) {
  return nums.sort((a, b) => a - b)[Math.round(nums.length / 2)];
}

/* 投票登记法 */
var majorityElement = function(nums) {
  let cur_num = nums[0], count = 1;
  for(let i = 1; i < nums.length; i++) {
    if (count == 0) {
      cur_num = nums[i];
    }
    count += cur_num == nums[i] ? 1 : -1;
  }

  return cur_num;
}

let arr = [3,2,3];
console.log(majorityElement(arr));