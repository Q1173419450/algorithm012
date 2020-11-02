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
/* 所有节点 */
var sumOfLeftLeaves = function(root) {
    if (root == null) return 0;

    let res = root.val;
    let left = sumOfLeftLeaves(root.left);
    let right = sumOfLeftLeaves(root.right)
 
    return res + left + right
};

/* 左右子树和 */
var sumOfLeftLeaves = function(root) {
    if (root == null) return 0;

    let res = 0;
    if (root.left == null && root.right == null) {
        res = root.val;
    }

    let left = sumOfLeftLeaves(root.left);
    let right = sumOfLeftLeaves(root.right)
    return res + left + right
};

var sumOfLeftLeaves = function(root, flag) {
    if (root == null) return 0;

    if (flag && root.left == null && root.right == null) {
        return root.val;
    }

    let left = sumOfLeftLeaves(root.left, true);
    let right = sumOfLeftLeaves(root.right, false)
    return left + right
};