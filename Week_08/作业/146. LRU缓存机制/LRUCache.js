class Node {
    constructor(k, v) {
        this.key = k;
        this.val = v;
    }
}

class DoubleList {
    addFirst(x) {

    }

    remove(x) {

    }

    removeLast() {

    }

    size() {

    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cap = capacity;
    this.map = new Map();
    this.cache = new DoubleList();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) {
        return -1;
    }
    let val = map.get(key).val;
    this.put(key, val);

    return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let x = new Node(key, val);

    if (this.map.has(key)) {
        this.cache.remove(map.get(key));
        this.cache.addFirst(x);
        this.map.put(key, x);
    } else {
        if (this.cap == this.cache.size()) {
            let last = this.cache.removeLast();
            this.map.remove(last.key);
        }
        this.cache.addFirst(x);
        this.map.put(key, x);
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */