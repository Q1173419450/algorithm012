/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): number[] {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[j] = nums[i];
      if (j != i) {
        nums[i] = 0;
      }
      j++;
    }
  }
  return nums;
}

let num = moveZeroes([0, 1, 0, 3, 12]);
console.log(num);
