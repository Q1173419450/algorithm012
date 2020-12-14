/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
/* 
时间复杂度：O(Nlogk) N 是数组长度，堆的操作为 logK
空间复杂度：O(Nk) N 是 map 长度，堆的大小为 k 
 */
var topKFrequent = function (nums, k) {
  // 使用 map 统计每个元素的出现频率
  let map = new Map(),
    heap = [, ];
  nums.map((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  })
  if (map.size <= k) {
    return [...map.keys()];
  }

  // 遍历 map 将 k 个数，构造成一个小顶堆
  let i = 0;
  map.forEach((value, key) => {
    if (i < k) { // 初始化 前 k 堆
      heap.push(key);
      if (i == k - 1) buildHeap(heap, map, k);
    } else if (map.get(heap[1] < value)) { // 如果小于堆顶元素，则不做任何处理，继续遍历下一元素；如果大于堆顶元素，则将这个元素替换掉堆顶元素，然后再堆化成一个小顶堆。
      heap[1] = key;
      heapify(heap, map, k, 1);
    }
    i++
  })

  heap.shift();
  return heap
};

// 原地建堆，从后往前，自上而下式建小顶堆
var buildHeap = (heap, map, k) => {
  if (k == 1) return
  for (let i = Math.floor(k / 2); i >= 1; i--) {
    heapify(heap, map, k, i);
  }
}

// 堆化
let heapify = (heap, map, k, i) => {
  // 自上而下堆化
  while (true) {
    let minIndex = i;
    if (2 * i <= k && map.get(heap[2 * i]) < map.get(heap[i])) {
      minIndex = 2 * i;
    }

    if (2 * i + 1 <= k && map.get(heap[2 * i + 1]) < map.get(heap[minIndex])) {
      minIndex = 2 * i + 1;
    }

    if (minIndex !== i) {
      //交换元素在堆的位置
      swap(heap, i, minIndex);
      i = minIndex;
    } else {
      break;
    }
  }
}

let swap = (heap, i, j) => {
  let temp = heap[i];
  heap[i] = heap[j];
  heap[j] = temp;
}