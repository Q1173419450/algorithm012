/**
 * @param {number[]} nums
 * @return {number[]}
 */
/* 
  暴力求解
  时间0(N *2)
  空间O(n);
*/
var smallerNumbersThanCurrent = function(nums) {
  let ans = new Array(nums.length).fill(0);
  let j = 0;

  while(j < nums.length) {
    for(let i = 0; i < nums.length; i++) {
      if (nums[j] > nums[i]) {
        ans[j] += 1;
      }
    }
    j++
  }

  return ans
};

/* 快排 */
var smallerNumbersThanCurrent = function(nums) {
  const n = nums.length;
  const data = Array.from({ length: n }, () => new Array(2).fill(0));
  console.log(data);
  for(let i = 0; i < n; i++) {
    data[i][0] = nums[i];
    data[i][1] = i;
  }

  data.sort((a, b) => a[0] - b[0]);
  console.log(data);
  const ans = new Array(n);
  let prev = -1;
  for(let i = 0; i < n; i++) {
    console.log(data[i][0], i)
    if (prev == -1 || data[i][0] != data[i - 1][0]) {
      prev = i;
    }
    // console.log(data[i][1], prev)
    ans[data[i][1]] = prev;
  }

  return ans
}

/* 
  计数排序
  需要的空间比较大
*/
var smallerNumbersThanCurrent = function(nums) {
  let freq = new Array(101).fill(0);
  for(let num of nums) {
    freq[num]++
  }

  for(let i = 1; i < freq.length; i++) {
    freq[i] += freq[i - 1];
  }

  let res = new Array(nums.length).fill(0);
  for(let i = 0; i < res.length; i++) {
    if (nums[i] > 0) res[i] = freq[num[i] - 1];
  }

  return res;
}
console.log(smallerNumbersThanCurrent([8,1,2,2,3]))