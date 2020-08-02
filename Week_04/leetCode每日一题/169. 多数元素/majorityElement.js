/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
  if(nums.length < 2) return nums[0];
  let map = {};
  let half = Math.round(nums.length / 2);
  console.log(half);

  for(let i = 0; i < nums.length; i++) {
    if(map[nums[i]] != undefined) {
      map[nums[i]] = map[nums[i]] + 1;
      if (map[nums[i]] >= half) {
        return nums[i]
      }
    } else {
      map[nums[i]] = 1;
    }
  }
};

/* 摩尔投票 */
var majorityElement = function(nums) {
  let card_num = nums[0], count = 1;

  for(let i = 0; i < nums.length; i++) {
    if (count == 0) {
      card_num = nums[i];
    }

    count += nums[i] == card_num ? 1 : -1;
  }

  return card_num
}


console.log(majorityElement([2, 3, 3]))