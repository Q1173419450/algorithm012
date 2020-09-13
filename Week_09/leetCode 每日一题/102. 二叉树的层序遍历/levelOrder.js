/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = [];
    let queue = [];

    if (root != null) {
        queue.push(root)
    }

    while(queue.length) {
        let n = queue.length;
        let level = [];
        for(let i = 0; i < n; i++) {
            let node = queue.shift();
            level.push(node.val);

            if (node.left != null) {
                queue.push(node.left);
            }

            if (node.right != null) {
                queue.push(node.right);
            }
        }
        res.push(level)
    }

    return res;
};