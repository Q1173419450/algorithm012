/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(root == null || (root.right == null && root.left == null)) {
      return root;
    }

    if (root.left && root.right) {
      root.left.next = root.right;
      root.right.next = getNextChild(root);
    }

    if (root.left == null) {
      root.right.next = getNextChild(root);
    }

    if (root.right == null) {
      root.left.next = getNextChild(root);
    }

    // 右子树根节点next关系建立好，左子树到右子树子节点正确挂载
    root.right = connect(root.right);
    root.left = connect(root.left);

    return root;
};

function getNextChild(root) {
  while(root.next) {
    if (root.next.left) {
      return root.next.left;
    }

    if(root.next.right) {
      return root.next.right
    }
    root = root.next;
  }

  return null;
}

/* BFS */
