/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* 暴力 */
var searchRange = function(nums, target) {
  if (!nums.length) return [-1, -1];
  let res = [];
  let start = true;
  let end = true;

  for(let i = 0; i < nums.length; i++) {
      if (start && nums[i] == target) {
          start = false;
          res.push(i);
      }
  }

  for(let i = nums.length - 1; i >= 0; i--) {
      if (end && nums[i] == target) {
        end = false;
        res.push(i);
      }
  }
  return res.length ? res : [-1, -1];
};

/* 二分查找 */
var searchRange = function(nums, target) {
  let len = nums.length;
  if (!len) return [-1, -1];

  let first = findFirstPosition(nums, target);
  if (first == -1) return [-1, -1];
  let last = findLastPosition(nums, target);

  return [first, last];
}

let findFirstPosition = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      right = mid;
    }
  }

  if (nums[left] === target) {
    return left
  }
  return -1;
}

let findLastPosition = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = left + Math.floor((right - left + 1) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }

  return left;
}

/* 代码缩减 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (!nums.length) return [-1, -1];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      let start = mid;
      let end = mid;
      while (start >= 0 && nums[start] == target) start--
      while (end < nums.length && nums[end] == target) end++

      return [start + 1, end - 1];
    }
  }

  return [-1 , -1]
}
