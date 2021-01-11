/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  k %= nums.length;

  reverse(nums, 0, nums.length - 1);  // 取反整个数字
  reverse(nums, 0, k - 1);  // k 前半段
  reverse(nums, k, nums.length - 1);  // k 后半段
};

var reverse = (nums, start, end) => {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

var rotate = function(nums, k) {
  let len = nums.length;
  k %= len;
  let count = 0;
  for(let start = 0; count < len; start++) {
    let cur = start;
    let pre = nums[cur]
    do {
      let next = (cur + k) % len;
      let temp = nums[next];
      nums[next] = pre;
      pre = temp;
      cur = next;
      count++
      
    } while (start != cur);
  }
}