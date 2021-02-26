/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const map = new Map();

  /* 计算每个数字出现次数 */
  nums.forEach(n => {
    if (map.has(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
  })

  const heap = [];
  // 建堆
  for(const item of map) {
    if (heap.length < k) {  // 取前 k 个数建立基础堆
      heap.push(item);
      shiftUp(heap, heap.length - 1);
    } else if (item[1] > heap[0][1]) {  // 自上而下堆化
      heap[0] = item;
      shiftDown(heap, 0);
    }
  }

  return heap.map(item => item[1]);
}

const shiftUp = function (heap, len) {
  const parent = (len - 1) / 2 | 0;
  if (heap[len][1] < heap[parent][1]) {
    swap(heap, len, parent);
    shiftUp(heap, parent);
  }
}

const shiftDown = function (heap, start) {
  let left = i * 2 + 1;
  if (left >= heap.length) return;
  if (left + 1 < heap.length && heap[left][1] > heap[left + 1][1]) left++;

  if (heap[start][1] > heap[left][1]) {
    swap(heap, start, left);
    shiftDown(heap, left);
  }
}

const swap = function (heap, i, j) {
  [heap[i], heap[j]] = [heap[j], heap[i]];
}