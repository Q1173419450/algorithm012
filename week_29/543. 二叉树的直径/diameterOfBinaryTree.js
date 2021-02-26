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
/* 并不是用肉眼去看从一个节点到另一个节点、而是从某个节点到俩端的最大值是多少，则为最长直径 */
var diameterOfBinaryTree = function(root) {
  let ans = 1;
  var dfs = (node) => {
    if (!node) return 0; // 下一级
    let L = dfs(node.left);
    let R = dfs(node.right);

    ans = Math.max(ans , L + R + 1); // 左 + 右 + 根
    return Math.max(L, R) + 1; // 上一级、该节点为根的子树深度
  }
  return ans - 1;
};