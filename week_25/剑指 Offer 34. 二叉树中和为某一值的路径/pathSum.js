/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  let ans = [];
  let path = [];
  dfs(root, sum, ans, path);
  return ans;
};

var dfs = function(root, sum, ans, path) {
  if (root == null) return;

  path.push(root.value);
  sum -= root.val;

  if (sum == 0 && root.left == null && root.right == null) {
    ans.push(path.slice());
  }
  dfs(root.left, sum, ans, path);
  dfs(root.right, sum, ans, path);
  path.pop();
}