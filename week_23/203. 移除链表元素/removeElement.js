/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/* 不仅要保证长度，且要保证原数组对应位置的值不等于 val */
var removeElement = function(nums, val) {
  let ans = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== val) {
      nums[ans] = nums[i];
      ans++
    }
  }
  return ans
};

/* 双指针 */
var removeElement = function(nums, val) {
  let i = 0;
  let j = nums.length;
  while (i < j) {
    if (nums[i] == val) {
      console.log(nums[j - 1])
      nums[i] = nums[j - 1];
      j--
    } else {
      i++
    }
  }

  return i;
}

let arr = [3,2,2,3];
let res = removeElement(arr, 3);
console.log(res);