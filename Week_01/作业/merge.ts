/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): number[] {
  let nums = nums1.concat(nums2);
  return nums.sort((a, b) => a - b);
}

let m = merge([1, 2, 3], 3, [2, 5, 6], 3);
console.log(m);
