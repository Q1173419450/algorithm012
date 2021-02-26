// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// /* 
//   选择排序
//   选择最小的一个数，进行排序
//   局部最优，则全局最优
// */
// var sortArray = function(nums) {
//   let len = nums.length;
//   for(let i = 0; i < len - 1; i++) {
//     let minIndex = i;
//     for(let j = i + 1; j < len; j++) {
//       if (nums[j] < nums[minIndex]) {
//         minIndex = i;
//       }
//     }
//     [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
//   }
//   return nums;
// };

// /* 插入排序 */
// var sortArray = function(nums) {
//   let len = nums.length;
//   for(let i = 1; i < len; i++) {
//     let temp = nums[i];
//     let j = i;
//     while (j > 0 && nums[j - 1] > temp) {
//       nums[j] = nums[j - 1];
//       j--;
//     }
//     nums[j] = temp;
//   }
//   return nums;
// }

let INSERTION_SORT_THRESHOLD = 7;
/* 归并排序 */
var sortArray = function(nums) {
  let len = nums.length;
  mergeSort(nums, 0, len - 1);

  return nums;
}

var mergeSort = function (nums, start, end) {
  // 当数据少于 7个时，使用 插入排序，JDK 源码，这样做的
  if(end - start <= INSERTION_SORT_THRESHOLD) { // 冥冥之中自有 7 意
    insertSort(nums, start, end);
    return;
  }

  let mid = (start + end) >> 1;
  mergeSort(nums, start, mid);
  mergeSort(nums, mid + 1, end);

  if (nums[mid] <= nums[mid + 1]) return;

  // 重点在合并数组
  mergeOfTwoSortedArray(nums, start, mid, end);
}

var mergeOfTwoSortedArray = function (nums, start, mid, end) {
  let temp = new Array(end - start + 1).fill(0);

  let i = start;
  let j = mid + 1;
  let k = 0;

  while (i <= mid && j <= end) {
    temp[k++] = nums[i] <= nums[j] ? nums[i++] : nums[j++];
  }

  while (i <= mid) {
    temp[k++] = nums[i++]
  }

  while (j <= end) {
    temp[k++] = nums[j++];
  }

  for(let p = 0; p < temp.length; p++) {
    nums[start + p] = temp[p];
  }
}

var insertSort = function (nums, start, end) {
  for(let i = start + 1; i <= end; i++) {
    let temp = nums[i];
    let j = i;
    while (j > start && nums[j - 1] > temp) {
      nums[j] = nums[j - 1];
      j--;
    }
    nums[j] = temp;
  }
}

let arr = [-4,0,7,4,9,-5,-1,0,-7,-1];
sortArray(arr);
