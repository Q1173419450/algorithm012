/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root == null || root == p || root == q) return root;  // 若当前节点与 p、q 相等，则为公共祖先

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    if (left === null && right === null) return null;
    if (left == null) return right; // 如果到达 左子树 为null 时都找不到，则为右子树
    if (right == null) return left; // 如果到达 右子树 为null 时都找不到，则为左子树

  };