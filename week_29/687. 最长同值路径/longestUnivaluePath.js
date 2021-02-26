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
 * @return {number}
 */
var longestUnivaluePath = function(root) {
  var ans = 0;

  var dfs = (node) => {
    if (node === null) return 0;
    
    let L = dfs(node.left);
    let R = dfs(node.right);
    let arrowLeft = 0;
    let arrowRight = 0;

    if (node.left != null && node.val == node.left.val) { // 左子树同值
      arrowLeft += L + 1;
    }
    
    if (node.right != null && node.val == node.right.val) { // 右子树同值
      arrowRight += R + 1;
    }
    ans = Math.max(arrowLeft + arrowRight, ans);

    return Math.max(arrowLeft, arrowRight); // 根同值
  }
  dfs(root);
  return ans;
};