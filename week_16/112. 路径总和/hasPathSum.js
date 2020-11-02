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
 * @return {boolean}
 */
/* 递归 */
var hasPathSum = function(root, sum) {
  if(!root) return false
  if (!root.left && !root.right) return root.val = sum;

  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};

/* dfs */
var hasPathSum = function(root, sum) {
  if(!root) return false
  let 
}

/* bfs */
var hasPathSum = function(root, sum) {
  if(!root) return false;
  let queue = [[root, root.val]];
  while(queue.length) {
    let [node, path] = queue.shift();
    if (!node.left && !node.right && path === sum) return true;
    if (node.left) {
      queue.push([node.left, path + node.left.val]);
    }
    if (node.right) {
      queue.push([node.right, path + node.right.val]);
    }
  }
  return false
}