class Node {
  constructor(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
  }
}

// // 双向链表
// class DoubleLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   append(element) {
//     let node = new Node(element);
//     let current = null;
//     let previous = null;

//     if (this.head === null) {
//       this.head = node;
//     } else {
//       current = this.head;
//       while (current.next) {
//         previous = current; 
//         current = current.next;
//       }
//       current.next = node;
//       node.prev = previous;
//     }
//     this.length++;
//     return true;
//   }

//   // 任意位置插入元素
//   insert(position, element) {
//     if (position >= 0 && position <= this.length) {
//       let node = new Node(element);
//       let current = this.head;
//       let previous = null;
//       let index = 0;
//       // 首位
//       if (position === 0) {
//         if (!head) {
//           this.head = node;
//           this.tail = node;
//         } else {
//           node.next = current;
//           this.head = node;
//           current.prev = node;
//         }
//       } else if (position === this.length) { // 末尾
//         current = this.tail;
//         current.next = node;
//         node.prev = current;
//         this.tail = node;
//       } else { // 中间
//         while (index++ < position) {
//           previous = current;
//           current = current.next;
//         }
//         node.next = current;
//         previous.next = node;
//         current.prev = node;
//         node.prev = previous;
//       }
//       this.length++;
//       return true;
//     }
//     return false;
//   }

//   // 移除指定位置元素
//   removeAt(position) {
//     if (position > -1 && position < this.length) {
//       let current = this.head;
//       let previous = null;
//       let index = 0;

//       // 首位
//       if (position === 0) {
//         this.head = this.head.next
//         this.head.prev = null
//         if (this.length === 1) {
//           this.tail = null
//         }
//       } else if (position === this.length - 1) { // 末位
//         this.tail = this.tail.prev
//         this.tail.next = null
//       } else { // 中位
//         while (index++ < position) {
//           previous = current
//           current = current.next
//         }
//         previous.next = current.next
//         current.next.prev = previous
//       }
//       this.length--;
//       return current.element;
//     } else {
//       return null;
//     }
//   }

//   // 寻找元素下标
//   findIndex(element) {
//     let current = this.head;
//     let index = -1;
//     while (current) {
//       if (element === current.element) {
//         return index + 1;
//       }
//       index++;
//       current = current.next;
//     }

//     return -1;
//   }

//   // 删除指定文档
//   remove(element) {
//     let index = this.findIndex(element);
//     return removeAt(index);
//   }

//   isEmpty() {
//     return !this.length;
//   }

//   size() {
//     return this.length;
//   }

//   // 输出字符串
//   toString() {
//     let current = this.head;
//     let string = '';
//     while (current) {
//       string += ` ${current.element}`;
//       current = current.next;
//     }
//     return string;
//   }
// }

// var ll = new DoubleLinkedList();
// console.log(ll);
// ll.append(2);
// ll.append(6);
// ll.append(24);
// ll.append(152);
 
// ll.insert(3, 18);
// console.log(ll);

function find(element) {
  var currentNode = this.head
  while (currentNode.element != element) {
    if (currentNode.next == null) {
      console.log('can not find this node; maybe not have this node')
      return 'error'
    }
    currentNode = currentNode.next
  }
  return currentNode
}
function insert(newelement, currentelement) {
  var newNode = new Node(newelement)
  var currentNode = this.find(currentelement)
  if (currentNode === 'error') {
    console.log('无法插入，要插入节点不存在')
    return
  }
  if (currentNode.next != null) {
    newNode.next = currentNode.next
    currentNode.next = newNode
    newNode.previous = currentNode
    newNode.next.previous = newNode
  } else {
    currentNode.next = newNode
    newNode.previous = currentNode
  }
}
function remove(element) {
  var currentNode = this.find(element)
  if (currentNode === 'error') {
    console.log('要移除节点不存在')
    return
  }
  /*首先是不是头尾节点的情况*/

  if (currentNode.next != null && currentNode.previous != null) {
    currentNode.previous.next = currentNode.next
    currentNode.next.previous = currentNode.previous
    currentNode.next = null
    currentNode.previous = null
  } else if (currentNode.previous == null) {
    /*当是头节点的时候*/
    this.head = currentNode.next
    currentNode.next.previous = null
    currentNode.next = null
  } else if (currentNode.next == null) {
    /*当是尾节点的时候 */

    currentNode.previous.next = null
    currentNode.previous = null
  }
}
function showlist() {
  var head = this.head
  do {
    console.log(head.element)
    head = head.next
  } while (head != null)
  // while (head.next != null) {
  //   console.log(head.element)
  //   head = head.next
  // }
}
function initlist() {
  this.head = new Node('one')
  this.find = find
  this.insert = insert
  this.remove = remove
  this.showlist = showlist
  this.lastNode = lastNode
  this.append = append
}
function append(element) {
  var lastnode = this.lastNode()
  var newNode = new Node(element)
  lastnode.next = newNode
  newNode.previous = lastnode
}
function lastNode() {
  var head = this.head
  while (head.next != null) {
    head = head.next
  }
  return head
}
var list = new initlist()
list.insert('two', 'one')
list.insert('four', 'two')
list.insert('three', 'two')

// console.log(list.head.next)
list.showlist()
list.append('A')
list.append('B')
list.insert('B2', 'B')
list.showlist()
console.log(list.lastNode())
// list.remove('one')
// list.showlist()
console.log(list.find('A').previous)
// console.log(list.find('four').previous)
// console.log(list.head.element)