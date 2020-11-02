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
var distributeCoins = function(root) {
  let ans = 0;
  var dfs = function(root) {
    if (root == null) return 0;
  
    let L = dfs(root.left);
    let R = dfs(root.right);
    ans += Math.abs(L) + Math.abs(R);
    return root.val + L + R - 1;
  }

  dfs(root);

  return ans
}