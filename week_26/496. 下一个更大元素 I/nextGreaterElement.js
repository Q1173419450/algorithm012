/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/* 暴力法 */
var nextGreaterElement = function(nums1, nums2) {
  let obj = {}
  let res = new Array(num1.length).fill(-1);
  for(let i = 0; i < num2.length; i++) {
    obj[nums2[i]] = i;  // 先建立nums2 中 值与 索引的 表
  }

  for(let i = 0; i < num1.length; i++) {
    for(let j = obj[nums1[i]]; j < num2.length; j++) {  // 从nums1 中获取到表中 num1的值在 nums2 中的位置
      if (num2[j] > num1[i]) {  // nums2 中拿到第一个大于 num1 的值，存入数组。
        res[i] = num2[j];
      }
    }
  }
  return res;
};

/* 单调栈 */
var nextGreaterElement = function(nums1, nums2) {
  let stack = [];
  let map = new Map();

  let res = new Array(nums1.length);

  for(let i = 0; i < nums2.length; i++) {
    while (stack.length && nums[i] > stack[stack.length - 1]) {
      map.set(stack.pop(), nums[i]);
    }

    stack.push(nums2[i]);
  }

  while (stack.length) {
    map.set(stack.pop(), -1);
  }

  console.log(map);

  for(let i = 0; i < nums1.length; i++) {
    res[i] = map.get(num1[i]);
  }
  return res;
}