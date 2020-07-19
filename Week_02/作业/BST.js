class Node {
  constructor(data) {
    // this.root = this;
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) { // 插入
    let newNode = new Node(data);
    let insertNode = (node, newNode) => {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode
        } else {
          insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          insertNode(node.right, newNode);
        }
      }
    }

    if (!this.root) {
      this.root = newNode
    } else {
      insertNode(this.root, newNode);
    }
  }

  /* 遍历 */
  /* 中序 */
  inOrder() {
    let backs = [];
    let inOrderNode = (node, callback) => {
      if (node !== null) {
        inOrderNode(node.left, callback);
        backs.push(callback(node.data));
        inOrderNode(node.right, callback);
      }
    }
    let callback = function (v) {
      return v;
    }
    inOrderNode(this.root, callback);
    return backs;
  }

  inOrder2() {
    let result = [];
    let stack = [];


    while (this.root !== null || stack.length > 0) {
      debugger
      if (this.root.left) {
        stack.push(this.root);
        this.root = this.root.left;
      } else if (!this.root.left && !this.root.right) {
        result.push(this.root.data);
        root = stack.pop();
        root && (this.root.left = null)
      } else {
        result.push(this.root.data);
        root = this.root.right;
      }
    }

    return result
  }

  /* 前序 */
  perOrder() {
    let back = [];

    let perOrderNode = (node, callback) => {
      if (node) {
        back.push(callback(node.data));
        perOrderNode(node.left, callback);
        perOrderNode(node.right, callback);
      }
    }

    let callback = function (v) {
      return v;
    }

    perOrderNode(this.root, callback);
    return backs;
  }

  perOrder2() { // 栈解法
    const list = [];
    const stack = [];

    if (this.root) stack.push(this.root);
    while (stack.length > 0) {
      const curNode = stack.pop();

      list.push(curNode.data);
      while (stack.length > 0) {
        const curNode = stack.pop();

        list.push(curNode.val);
        if (curNode.left !== null) {
          stack.push(curNode.left);
        }

        if (curNode.right !== null) {
          stack.push(curNode.right);
        }

      }
    }

    return list;
  }

  /* 后序 */
  nextOrder() {
    let back = [];

    let nextOrderNode = (node, callback) => {
      if (node) {
        nextOrderNode(node.right, callback);
        nextOrderNode(node.left, callback);
        back.push(callback(node.data));
      }
    }

    let callback = function (v) {
      return v
    }

    nextOrderNode(this.root, callback);
    return backs;
  }
}

let datas = [11, 7, 5, 3, 6, 9, 8, 10, 20, 14, 12, 25, 18];

let bst = new BST();

datas.forEach(data => {
  bst.insert(data);
})

console.log(bst.root);
// console.log(bst.inOrder());
console.log(bst.inOrder2());