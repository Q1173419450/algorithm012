/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  let queue = [root];
  let flag = true;
  let res = [];
  while (queue.length) {
    let list = [];
    let size = queue.length;
    for(let i = 0; i < size; i++) {
      let node = queue.shift();
      if (flag) {
        list.push(node.val);
      } else {
        list.unshift(node.val);
      }

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(list);
    flag = !flag;
  }
  return flag;
};