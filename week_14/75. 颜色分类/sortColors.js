/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/* 单指针 */
var sortColors = function(nums) {
  let len = nums.length;
  let ptr = 0;
  for(let i = 0; i < len; i++) {
    if(nums[i] == 0) {
      exchange(nums[i], nums[ptr]);
      ptr++
    }
  }

  for(let j = ptr; j < len; j++) {
    if(nums[j] === 1) {
      exchange(nums[i], nums[ptr]);
      ptr++
    }
  }

  return nums;
};

var swap = function(nums, a, b) {
  let temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}

/* 双指针 */
var sortColors = function(nums) {
  let len = nums.length;
  let p0 = 0, p1 = 0;
  for(let i = 0; i < len; i++) {
    if (nums[i] == 0) {
      swap(nums, i, p0)
      if(p0 < p1) {
        swap(nums, i, p1)
      }
      p0++
      p1++
    } else if (nums[i] == 1) {
      swap(nums, i, p1)
      p1++
    }
  }
  return nums;
}

var sortColors = function(nums) {
  let j = 0; k = nums.length - 1;
  for(let i = 0; i <= k; i++) {
    if(nums[i] == 0) {
      swap(nums, i, j);
      j++;
    } else if (nums[i] == 2) {
      swap(nums, i, k);
      i--;
      k--
    }
  }
}

var sortColors = function(nums) {
  let red = 0, white = 0, blue = nums.length - 1;
  while(white <= blue) {
    if(nums[white] === 0) {
      [nums[red], nums[white]] = [nums[white], nums[red]];
      white++
      red++
    } else if (nums[white] === 1) {
      white++
    } else {
      [nums[white], nums[blue]] = [nums[blue], nums[white]];
      blue--;
    }
  }
}