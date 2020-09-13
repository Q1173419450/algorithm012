/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let paths = [];
    const dfs = (root, path) => {
        if(root) {
            path += root.val.toString();
            if (root.left == null && root.right == null) {
                paths.push(path);
            } else {
                path += '->'
                dfs(root.left, path);
                dfs(root.right, path);
            }
        }
    }

    dfs(root, '');

    return paths;
};

/* bfs */
var binaryTreePaths = function(root) {
    const paths = [];
    if (root === null) {
        return paths;
    }

    const queue = [root];
    const path_queue = [root.val.toString()];

    while(queue.length) {
        const node = queue.shift();
        const path = path_queue.shift();

        if (node.left === null && node.right === null) {
            paths.push(path);
        } else {
            if (node.left != null) {
                queue.push(node.left);
                path_queue.push(`${path}->${node.left.val.toString}`);
            }

            if (node.right != null) {
                queue.push(node.left);
                path_queue.push(`${path}->${node.right.val.toString}`);
            }
        }
    }

    return paths;
}