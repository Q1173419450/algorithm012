/* 189. 旋转数组 */

/* 暴力 */
// function rotate(nums: number[], k: number): number[] {
//   let temp, previous;
//   for (let i = 0; i < k; i++) {
//     previous = nums[nums.length - 1];
//     for (let j = 0; j < nums.length; j++) {
//       temp = nums[j];
//       nums[j] = previous;
//       previous = temp;
//     }
//   }
//   return nums;
// }

/* https://leetcode-cn.com/problems/rotate-array/solution/xuan-zhuan-shu-zu-yuan-di-huan-wei-xiang-xi-tu-jie/ */
function rotate(nums: number[], k: number): number[] {
  let len = nums.length;
  k = k % len;
  let count = 0;

  for (let start = 0; count < len; start++) {
    let cur = start;
    let pre = nums[cur];

    do {
      let next = (cur + k) % len;
      let temp = nums[next];
      nums[next] = pre;
      pre = temp;
      cur = next;
      count++;
    } while (start != cur);
  }

  return nums;
}

let res = rotate([1, 2, 3, 4, 5, 6, 7], 3);
console.log(res);
