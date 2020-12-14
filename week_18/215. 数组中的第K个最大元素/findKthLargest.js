/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function(nums, k) {
//   return nums.sort((a, b) => a - b)[nums.length - k];
// };

/* 小顶堆 */
var findKthLargest = function(nums, k) {
  let heap = nums.slice(0, k), i = 0;
  buildHeap(heap, k);

  for(let i = k; i < nums.length; i++) {
    if (heap[0] < nums[i]) {
      heap[0] = nums[i];
      if (k > 1) heapify(heap, k, 0);
    }
  }
  return heap[0];
}

let buildHeap = (arr, k) => {
  if (k === 1) return;
  for(let i = Math.floor(k / 2 - 1); i >= 0; i--) {
    heapify(arr, k, i);
  }
}

let heapify = (arr, k, i) => {
  // 自上而下式堆化
  while(true) {
    let minIndex = i;
    const leftNodeIndex = 2 * i + 1
    const rightNodeIndex = 2 * i + 2
    if (minIndex < k && arr[leftNodeIndex] < arr[minIndex]) {
      minIndex = leftNodeIndex;
    }
    if (minIndex < k && arr[rightNodeIndex] < arr[minIndex]) {
      minIndex = rightNodeIndex;
    }
    if (minIndex !== i) {
      swap(arr, i, minIndex);
      i = minIndex
    } else {
      break;
    }
  }
}

let swap = (arr, i, minIndex) => {
  let temp = arr[i];
  arr[i] = arr[minIndex];
  arr[minIndex] = temp;
}

console.log(findKthLargest([3,2,1,5,6,4] ,2))