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
var inorderTraversal = function (root) {
  let res = [];
  let stack = [];

  while(root != null || stack.length) {
    while(root != null) {
      stack.push(root);
      root = root.left;
    }
    const curNode = stack.pop();
    res.push(curNode.val);
    root = curNode.right;
  }

  return res;
}