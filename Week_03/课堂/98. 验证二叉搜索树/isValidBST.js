/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
/* 中序遍历 */
/* 
  时间：O(N)
  空间：O(N)
*/
var isValidBST = function(root) {
  if (root == null) {
    return true;
  }

  let res = [];

  var inOrder = function(root) {
    if (root) {
      inOrder(root.left);
      res.push(root.val);
      inOrder(root.right);
    }
  }
  inOrder(root);

  for(let i = 1; i < res.length; i++) {
    if (res[i] <= res[i - 1]) {
      return false
    }
  }

  return true
}