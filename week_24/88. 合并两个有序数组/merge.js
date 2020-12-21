/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let len1 = m - 1;
  let len2 = n - 1;
  let len = m + n - 1;

  while (len1 >= 0 && len2 >= 0) {
    // 从后往前合并数组，谁大谁放后面
    nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
  }

  // 剩余的 nums1
  while (len >= 0 && len1 >= 0) {
    nums1[len--] = nums1[len1--];    
  }

  // 剩余的 nums2
  while (len >= 0 && len2 >= 0) {
    nums1[len--] = nums2[len2--];    
  }
};