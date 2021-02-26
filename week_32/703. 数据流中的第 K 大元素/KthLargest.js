/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.heap = new MinHeap(k);
  for (let i = 0; i < nums.length; i++) {
    this.heap.add(nums[i]);
  }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.heap.add(val);
  return this.heap.heap[0];
};

class MinHeap {
  constructor(k) {
    this.heap = [];
    this.k = k;
  }

  add(num) {
    if (this.heap.length < this.k) {
      this.heap.push(num);
      this.up(this.heap.length - 1);
    } else if (num > this.heap[0]) {
      this.heap[0] = num;
      this.down(0);
    }
  }

  // 上浮到合适位置
  up(i) {
    const parent = (i - 1) / 2 | 0;
    if (this.heap[i] < this.heap[parent]) {
      this.swap(i, parent);
      this.up(parent);
    }
  }

  // 新数字比栈顶大，用它替换堆顶，执行“下沉”，交换到合适的位置。
  down(i) {
    let left = i * 2 + 1;
    if (left >= this.heap.length) return;
    if (left + 1 < this.heap.length && this.heap[left] > this.heap[left + 1]) left++

    if (this.heap[i] > this.heap[left]) {
      this.swap(i, left);
      this.down(left);
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */