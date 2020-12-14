/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
  let len1 = nums1.length;
  let len2 = nums2.length;

  let max = new Array(k).fill(0);
  let start = Math.max(0, k - len2);
  let end = Math.min(k, len1);

  for(let i = start; i <= end; i++) {
    const sub1 = MaxSubsequence(nums1, i);
    const sub2 = MaxSubsequence(nums2, k - i);
    const curMax = merge(sub1, sub2);
    if(compare(curMax, 0, max, 0) > 0) {
      max.splice(0, k, ...curMax);
    }
  }
  return max;
};

/* 利用栈得到当前k值中num 最大的组合 */
var MaxSubsequence = function(nums, k) {
  const length = nums.length;
  const stack = new Array(k).fill(0);
  let top = -1;
  let remain = length - k;
  for (let i = 0; i < length; i++) {
      const num = nums[i];
      while (top >= 0 && stack[top] < num && remain > 0) {
          top--;
          remain--;
      }
      if (top < k - 1) {
          stack[++top] = num;
      } else {
          remain--;
      }
  }
  return stack;
}

/* 归并排序 */
var merge = (sub1, sub2) => {
  const x = sub1.length, y = sub2.length;

  if (x == 0) return sub2;
  if (y == 0) return sub1;

  const mergeLength = x + y;
  const merged = new Array(mergeLength).fill(0);
  let index1 = 0, index2 = 0;
  for(let i = 0; i < mergeLength; i++) {
    if (compare(sub1, index1, sub2, index2) > 0) {
      merged[i] = sub1[index1++];
    } else {
      merged[i] = sub2[index2++];
    }
  }
  return merged;
}

var compare = (sub1, index1, sub2, index2) => {
  const x = sub1.length, y = sub2.length;
  while (index1 < x && index2 < y) {
    const difference = sub1[index1] - sub2[index2];

    if (difference !== 0) {
      return difference
    }
    index1++
    index2++
  }
  return (x - index1) - (y - index2);
}