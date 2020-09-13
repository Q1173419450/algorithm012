/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    let heap = [,];

    // for(let i = 0; i < nums.length; i++) {
    //     if (map.has(nums[i])) {
    //         map.set(nums[i], map.get(nums[i]) + 1);
    //     } else {
    //         map.set(nums[i], 1);
    //     }
    // }

    nums.map((num) => {
        if(map.has(num)) map.set(num, map.get(num)+1)
        else map.set(num, 1)
    })
    
    if(map.size <= k) {
        return [...map.keys()]
    }

    let i = 0;
    map.forEach((value, key) => {
        if (i < k) {
            heap.push(key);

            if (i === k - 1) buildHeap(heap, map, k);
        } else if (map.get(heap[1]) < value) {
            heap[1] = key;
            heapify(heap, map, k, 1);
        }
        i++
    })

    heap.shift();
    return heap;
};

/* 建堆 */
let buildHeap = (heap, map, k) => {
    if (k === 1) return ;

    for(let i = Math.floor(k / 2); i >= 1; i--) {
        heapify(heap, map, k , i);
    }
}

/* 堆化 */
let heapify = (heap, map, k, i) => {
    while(true) {
        let minIndex = i;

        if (2 * i <= k && map.get(heap[2 * i] < map.get(heap[i]))) {
            minIndex = 2 * i;
        }

        if (2 * i + 1 <= k && map.get(heap[2 * i + 1]) < map.get(heap[minIndex])) {
            minIndex = 2 * i + 1;
        }

        if (minIndex !== i) {
            swap(heap, i, minIndex)
            i = minIndex
        } else {
            break
        }
    }
}

// 交换
let swap = (arr, i , j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/* hash map + 小顶堆 */
var topKFrequent = function (nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) { // 存储数字出现次数
        let getMap = map.get(nums[i]);

        if (!getMap) {
            map.set(nums[i], 1);
        } else {
            map.set(nums[i], getMap + 1);
        }
    }

    const minHeap = new MinHeap(k, (a, b) => a.value - b.value);

    for (const [key, value] of map.entries()) { // 取得key & value
        minHeap.insert({
            key,
            value
        });
    }

    return minHeap.stack.map(el => el.key);
};

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
            this.sink(0)
        }
    }
}

MinHeap.prototype.swim = function (index) {
    if (index >= this.stack.length) return;
    const parentIndex = parseInt((index - 1) / 2);
    if (this.comparator(this.stack[index], this.stack[parentIndex]) >= 0) return;
    this.exchange(index, parentIndex);
    this.swim(parentIndex);
}

MinHeap.prototype.sink = function (index) {
    if (index * 2 + 1 >= this.stack.length) return;
    let next = index * 2 + 1;
    if (next + 1 < this.stack.length && this.comparator(this.stack[next], this.stack[next + 1]) > 0) {
        next = next + 1;
    }

    if (this.comparator(this.stack[index], this.stack[next]) <= 0) return;

    this.exchange(index, next);
    this.sink(next);
}

MinHeap.prototype.exchange = function (index1, index2) {
    const temp = this.stack[index1];
    this.stack[index1] = this.stack[index2];
    this.stack[index2] = temp;
}