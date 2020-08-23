/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    const res = [];

    var postOrderNode = (root) => {
        if (root) {
            root.children.forEach(child => {
                postOrderNode(child);
            });
            res.push(root.val)
        }
    }

    postOrderNode(root)

    return res
};