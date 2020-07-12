/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序
 * 必须在原数组上操作，不能拷贝额外的数组。
 * 尽量减少操作次数。
 * Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
  let temp = 0;
  for(let i = 0; i < nums.length; i++) {
    if (nums[temp] === 0) {
      nums.splice(temp, 1);
      nums[nums.length] = 0;
    } else {
      temp++
    }
  }

  return nums
};

/* 交换位置 swap */
function moveZeroes(nums) {
  let j = 0;
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      let temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
      j++
    }
  }
}

/* 开索引 */
// function moveZeroes(nums) {
//   let j = 0;
//   for(let i = 0; i < nums.length; i++) {
//     if (nums[i] != 0) {
//       nums[j] = nums[i]
//       if (i != j) {
//         nums[i] = 0;
//       }
//       j++
//     }
//   }

//   return nums
// };

console.log(moveZeroes([0, 0, 1]))