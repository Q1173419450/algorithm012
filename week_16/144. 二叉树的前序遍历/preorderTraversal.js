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
var preorderTraversal = function (root) {
  if (!root) return root;
  let res = [];
  res.push(root.val);
  root.left && preorderTraversal(root.left);
  root.right && preorderTraversal(root.right);
  return res;
}

var preorderTraversal = function (root) {
  if (!root) return root;
  let stack = [root];
  let res = [];
  while(stack.length) {
    let node = stack.pop();
    res.push(node.val);
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }

  return res;
}