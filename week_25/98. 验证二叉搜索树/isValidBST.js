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
 * @return {boolean}
 */
var isValidBST = function(root) {
  let arr = [];
  const midOrder = (root) => {
    if (root) {
      root.left && midOrder(root.left);
      arr.push(root.value);
      root.right && midOrder(root.right);
    }
  }
  midOrder(root);

  for(let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      return false;
    }
  }

  return true;
};

var isValidBST = function(root) {
  let pre = -Infinity;
  const inOrder = (root) => {
    if (root == null) return true;

    if (!inOrder(root.left)) {
      return false;
    }

    if (root.val <= pre) {
      return false;
    }
    pre = root.val;

    return inOrder(root.right)
  }
}