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
var levelOrderBottom = function(root) {
    let res = [];
    let queue = [];

    if (root != null) {
        queue.push(root)
    }

    while(queue.length) {
        let level = [];
        const levelSize = queue.length;
        for(let i = 0; i < levelSize; i++) {
            let node = queue.shift()
            level.push(node.val)
            if (node.left) {
                queue.push(node.left)
            }
    
            if (node.right) {
                queue.push(node.right)
            }
        }
        res.unshift(level)
    }

    return res
};