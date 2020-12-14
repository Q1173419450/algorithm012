/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  if (!nums.length) return [];
  let res = [];

  let card1 = nums[0], count1 = 0;
  let card2 = nums[0], count2 = 0;

  for(const num of nums) {
    /* 相等则计数加一 */
    if (card1 == num) {
      count1++;
      continue;
    }

    if (card2 == num) {
      count2++;
      continue;
    }

    /* 交换候选人 */
    if (count1 == 0) {
      card1 = num;
      count1++;
      continue;
    }

    if (count2 == 0) {
      card2 = num;
      count2++;
      continue;
    }

    /* 候选人票数抵消 */
    count1--;
    count2--;
  }

  count1 = 0;
  count2 = 0;

  // 找到候选人后，判断是否满足 N/3;
  for(let num of nums) {
    if (card1 == num) count1++;
    else if (card2 == num) count2++;
  }

  let third = Math.floor(nums.length / 3);

  if (count1 > third) res.push(card1);
  if (count2 > third) res.push(card2);

  console.log(res);
  return res;
};

let arr = [1,2];
majorityElement(arr);