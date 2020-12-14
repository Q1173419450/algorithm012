/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function(arr, k) {
  const len = arr.length;
  if (k >= len) return arr;

  const heap = new MaxHeap(arr.slice(0, k));
  for(let i = k; i < len; i++) {
    if (heap.top() > arr[i]) {
      heap.extract();
      heap.insert(arr[i]);
    }
  }
  return heap.stack;
};

/* 大顶堆 */
class MaxHeap {
  constructor(arr = []) {
    this.stack = [];
    if(Array.isArray(arr)) {
      arr.forEach(this.insert.bind(this));
    }
  }

  // 插入
  insert(data) {
    this.stack.push(data);
    let index = this.stack.length - 1;
    while(index) {
      let parent = Math.floor((index - 1) / 2);
      if (this.stack[index] <= this.stack[parent]) break
      swap(this.stack, index, parent);
      index = parent;
    }
  }

  // 替换
  extract() {
    if (!this.stack.length) return null

    swap(this.stack, 0, this.stack.length - 1);
    const node = this.stack.pop();
    const length = this.stack.length;
    let index = 0, exchange = index * 2 + 1;
    while(exchange < length) {
      let right = index * 2 + 2;
      if (right < length && this.stack[right] > this.stack[exchange]) {
        exchange = right;
      }

      if (this.stack[exchange] < this.stack[index]) {
        break;
      }

      swap(this.stack, exchange, index);
      index = exchange;
      exchange = index * 2 + 1;
    }
    return node
  }

  top() {
    if (this.stack.length) return this.stack[0];
    return null
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}