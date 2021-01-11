/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
  this.capacity = k + 1;
  this.queue = new Array(this.capacity);
  this.front = 0;
  this.rear = 0;
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
  if(this.isFull()) return false;

  console.log('insertFront');
  console.log(this.front)
  console.log((this.front - 1 + this.capacity) % this.capacity)

  this.front = (this.front - 1 + this.capacity) % this.capacity;
  this.queue[this.front] = value;
  console.log(this.queue);
  return true;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
  if(this.isFull()) return false;

  this.queue[this.rear] = value;
  this.rear = (this.rear + 1) % this.capacity;
  return true;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
  if(this.isEmpty()) return false;

  this.front = (this.front + 1) % this.capacity;
  return true;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
  if(this.isEmpty()) return false;

  this.rear = (this.rear - 1 + this.capacity) % this.capacity;
  return true;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
  if(this.isEmpty()) return -1;
  return this.queue[this.front];
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
  if(this.isEmpty()) return -1;
  return this.queue[(this.rear - 1 + this.capacity) % this.capacity];
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
  return this.front == this.rear;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
  // 判断是否为满的设计
  console.log('isFull');
  console.log(this.rear, this.front, this.capacity);
  console.log((this.rear + 1) % this.capacity)
  return (this.rear + 1) % this.capacity === this.front;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */