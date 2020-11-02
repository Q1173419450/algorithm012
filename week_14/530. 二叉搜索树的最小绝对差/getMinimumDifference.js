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
var getMinimumDifference = function (root) {
  let res = Infinity;
  let pre = null;
  const helper = (root) => {
    if (!root) return null;

    if (root.left) helper(root.left);

    if (pre) {
      let rootNum = Math.abs(root.val - pre.val);
      res = Math.min(res, rootNum);
    }
    pre = root;

    if (root.right) helper(root.right);
  }
  helper(root)
  return res;
};