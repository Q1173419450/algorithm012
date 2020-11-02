/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
  this.idx = new Map();
  this.stack = [];
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
  this.stack.push(val)
  const set = this.idx.has(val) ? this.idx.get(val) : new Set();
  set.add(this.stack.length - 1);
  this.idx.set(val, set);
  return set.size === 1;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
/* 搜索树 */
/* 交换位置，删除数据 */
RandomizedCollection.prototype.remove = function(val) {
  if (!this.idx.has(val)) return false
  let i = null;
  for(const it of this.idx.get(val)) {
    if (!i) {
      i = it;
      break;
    }
  }
  const lastNum = this.stack[this.stack.length - 1];
  this.stack[i] = lastNum;
  this.idx.get(val).delete(i);
  this.idx.get(lastNum).delete(this.stack.length - 1);
  if (i < this.nums.length - 1) {
    this.idx.get(lastNum).add(i);
  }
  if (this.idx.get(val).size === 0) {
    this.idx.delete(val);
  }
  this.stack.pop();
  return true;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
  return  this.stack[Math.floor(this.stack.length * Math.random())]
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */