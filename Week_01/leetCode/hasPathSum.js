/**
 * Definition for a binary tree node.
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
/* DFS */
var hasPathSum = function (root, sum) {
  if (root == null) {
    return false
  }

  if (root.left == null && root.right == null) {
    return root.val == sum
  }

  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
};

console.log(hasPathSum([5,4,8,11,null,13,4,7,2,null,null,null,1], 22));