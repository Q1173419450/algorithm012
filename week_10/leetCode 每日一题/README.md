## 小顶堆

```js
/* 小顶堆 */
function MinHeap(capacity, comparator) {
    this.capacity = capacity;
    this.comparator = comparator;
    this.stack = [];
}

MinHeap.prototype.insert = function (value) {
    if (this.stack.length < this.capacity) {
        this.stack.push(value);
        this.swim(this.stack.length - 1);
    } else {
        if (this.comparator(value, this.stack[0]) > 0) {
            this.stack[0] = value;
            this.sink(0);
        }
    }
};

MinHeap.prototype.swim = function (index) {
    if (index >= this.stack.length) return;
    const parentIndex = parseInt((index - 1) / 2);
    if (this.comparator(this.stack[index], this.stack[parentIndex]) >= 0)
        return;
    this.exchange(index, parentIndex);
    this.swim(parentIndex);
};

MinHeap.prototype.sink = function (index) {
    if (index * 2 + 1 >= this.stack.length) return;
    let next = index * 2 + 1;
    if (
        next + 1 < this.stack.length &&
        this.comparator(this.stack[next], this.stack[next + 1]) > 0
    ) {
        next = next + 1;
    }

    if (this.comparator(this.stack[index], this.stack[next]) <= 0) return;

    this.exchange(index, next);
    this.sink(next);
};

MinHeap.prototype.exchange = function (index1, index2) {
    const temp = this.stack[index1];
    this.stack[index1] = this.stack[index2];
    this.stack[index2] = temp;
};

function main() {
    let map = new Map();

    const minHeap = new MinHeap(k, (a, b) => a.value - b.value);

    for (const [key, value] of map.entries()) {
        // 取得key & value
        minHeap.insert({ key, value });
    }

    return minHeap.stack.map((el) => el.key);
}
```
