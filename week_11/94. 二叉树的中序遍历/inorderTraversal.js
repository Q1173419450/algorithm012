/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/* 递归 */
var inorderTraversal = function (root) {
    let res = [];
    const dfs = (root) => {
        if (root) {
            dfs(node.left);
            res.push(root.val);
            dfs(node.right);
        }
    }
    dfs(root);

    return res
}

/* 栈 迭代 */
var inorderTraversal = function (root) {
    let res = [];
    let stack = [];

    while(root || stack.length) {
        while (root) {
            stack.push(root)
            root = root.left;
        }
       root = stack.pop();
       res.push(root.val);
       root = root.right;
    }

    return res;
}