/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
/* 排序 */
var kClosest = function(points, K) {
  return points.sort((a, b) => (a[0] * a[0] +  a[1] * a[1]) - (b[0] * b[0] + b[1] * b[1])).splice(0, K);
};

/* 小顶堆 */
class PriorityQueue {
  constructor(a) {
    this.queue = [];
    a && this._build(a);
  }
  add(v, second) {
    this.queue.push({ v, second })
    this._up(this.queue.length - 1);
  }

  shift() {
    this.queue.shift();
    if (this.queue.length) {
      this.queue.unshift(this.queue.pop());
      this._down(0);
    }
  }

  first() {
    return this.queue[0].v;
  }

  _build(a) {
    this.queue.push({ v: a[0] });
    for(let i = 1; i < a.length; i++) {
      this.queue.unshift({ v: a[i] });
      this._down(0);
    }
  }
  _swap(l, r, t) {
    t = this.queue[l];
    this.queue[l] = this.queue[r];
    this.queue[r] = t;
  }
  _down(i) {
    let t = this.queue.length - 2 >> 1;
    let max, maxI;
    while(i <= t) {
      let l = i * 2 + 1, r = l + 1;
      if ((this.queue[l] ? this.queue[l].v : -Infinity) > (this.queue[r] ? this.queue[r].v : -Infinity)) {
        max = this.queue[l].v;
        maxI = l;
      } else {
        max = this.queue[r].v;
        maxI = r;
      }
      if (this.queue[i].v < max) {
        this._swap(i, maxI);
        i = maxI;
      } else {
        break;
      }
    }
  }
  _up(i) {
    while(i > 0) {
      let t = i - 1 >> 1;
      if (this.queue[i].v > this.queue[t].v) {
        this._swap(i, t);
        i = t;
      } else {
        break;
      }
    }
  }
}

var kClosest = function(points, K) {
  let p = new PriorityQueue();
  for(let i = 0, v; i < points.length; i++) {
    v = points[i][0] * points[i][0] + points[i][1] * points[i][1];
    if (i < K) {
      p.add(v, i);
    } else if(v < p.first()){
      p.shift();
      p.add(v, i);
    }
  }
  return p.queue.map(v => points[v.second]);
}
