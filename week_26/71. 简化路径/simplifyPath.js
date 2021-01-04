/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  path = path.split('/');
  let stack = [];
  
  for(const s of path) {
    if (s == '' || s == '.') {
      continue;
    } else if (s == '..') {
      stack.pop();
    } else {
      stack.push(s);
    }
  }
  return `/${stack.join('/')}`
};

/* 链式栈 */
class Node {
  constructor(element) {
    this.element = element;
    this.next = null
  }
}

class Stack {
  constructor() {
    this._top = null;
  }

  push(element) {
    let node = new Node(element);
    if (this._top == null) {
      this._top = node;
    } else {
      node.next = this._top;
      this._top = node;
    }
  }

  pop() {
    if (this.top == null) return -1;
    const value = this._top.element;
    this._top = this._top.next;
    return value;
  }

  display() {
    let res = '';
    if (this._top !== null) {
      let temp = this._top;
      while (temp && temp.next) {
        res = temp.element + '/' + res;
        temp = temp.next;
      }
    }
    return '/' + res;
  }
}

var simplifyPath = function(path) {
  let stack = new Stack();
  let pathArr = path.split('/');
  for(let str of pathArr) {
    if (str == '' || str == '.') {
      continue;
    } else if (str == '..') {
      stack.pop();
    } else {
      stack.push(str);
    }
  }

  return stack.display();
}