/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/* 
  时间：O(n)
  空间：O(N)
*/
var maxDepth = function(root) {
  if (root == null) return 0;

  if (root) {
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    return Math.max(left, right) + 1
  }
};