/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.store = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  this.store.push(num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  let store = this.store.sort((a, b) => a - b); // NlogN
  let n = store.length;
  let index = Math.floor(n / 2);
  return (n & 1 ? store[index] : (store[index - 1] + store[index]) / 2);
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

// 插入排序
// NlogN

let medianFinder = new MedianFinder();
medianFinder.addNum(1)
medianFinder.addNum(2)
let res = medianFinder.findMedian();
console.log(res);