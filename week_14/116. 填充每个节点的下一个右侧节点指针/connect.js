/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
/* 迭代 队列 */
// var connect = function(root) {
//   if(!root) return root;
//   let queue = [root];
//   while(queue.length) {
//       let len = queue.length;
//       for(let i = 0; i < len; i++) {
//         let node = queue.shift();
//         if (i < len - 1) {
//           node.next = queue[0];          
//         }
//         node.left && queue.push(node.left);
//         node.right && queue.push(node.right)
//       }
//   }
//   return root
// };

/* 不用额外的空间 迭代 */
var connect = function(root) {
  if(!root) return root;
  let pre = root;
  while(pre.left) {
    let temp = pre;
    while(temp) {
      temp.left.next = temp.right;
      if (temp.next) {
        temp.right.next = temp.next.left;
      }
      temp = temp.next;
    }
    pre = pre.left;
  }
  return root;
}

/* BFS */
var connect = function(root) {
  const dfs = (root) => {
    if(!root) return root;

    let left = root.left;
    let right = root.right;
    while(left) {
      left.next = right;
      left = left.right;
      right = right.left;
    }
    dfs(root.left);
    dfs(root.right);
  }
  dfs(root);

  return root
}