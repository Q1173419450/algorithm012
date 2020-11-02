/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
  let node = new TreeNode(val);
  if (root == null) return node;
  const helper = (root) => {
    if (root.val > val) {
      if (root.left == null) {
        root.left = node;
        return;
      }
      helper(root.left);
    } else {
      if (root.right == null) {
        root.right = node;
        return;
      }
      helper(root.right);
    }
  }

  helper(root);

  return root
};