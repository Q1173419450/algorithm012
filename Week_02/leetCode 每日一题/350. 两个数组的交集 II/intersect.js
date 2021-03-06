/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/* 
  排序双指针 
  O(nlogn)
*/
var intersect = function (nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b);
  nums2 = nums2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let res = [];
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++
    } else if (nums1[i] > nums2[j]) {
      j++
    } else {
      res.push(nums1[i]);
      i++;
      j++
    }
  }
  return res;
};

console.log(intersect([1, 2, 2, 1], [2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));