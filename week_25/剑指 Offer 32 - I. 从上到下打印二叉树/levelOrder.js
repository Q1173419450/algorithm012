/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
  let queue = [root];
  let res = [];
  while (queue.length) {
    let size = queue.length;
    for(let i = 0; i < size; i++) {
      let node = queue[i];
      res.push(node.val);

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return res;
};