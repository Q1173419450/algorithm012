/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
/* bfs */
var serialize = function(root) {
    if (root == null) return 'X';
    const left = serialize(root.left);
    const right = serialize(root.right);
    return root.val + ',' + left + ',' + right;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const list = data.split(',');

    const buildTree = (list) => {
      const rootVal = list.shift();
      if (rootVal == 'X') return null;

      const root = new TreeNode(rootVal);
      root.left = buildTree(list);
      root.right = buildTree(list);
      return root;
    }
    return buildTree(list);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

 /* bfs */
 var serialize = function(root) {
  let res = [];
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();
    if (node) {
      res.push(node.val);

      queue.push(node.left);
      queue.push(node.right);
    } else {
      res.push('X');
    }
  }
  return res.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data == 'X') return null;

  let list = data.split(',');
  let root = new TreeNode(list[0]);
  let queue = [root];
  let cursor = 1;
  while (cursor < list.length) {
    const node = queue.shift();

    const leftVal = list[cursor];
    const rightVal = list[cursor + 1];

    if (leftVal != 'X') {
      const leftNode = new TreeNode(leftVal);
      node.left = leftNode;
      queue.push(leftNode);
    }

    if (rightVal != 'X') {
      const rightNode = new TreeNode(rightVal);
      node.right = rightNode;
      queue.push(rightNode);
    }
    cursor += 2;
  }
  return root;
};
