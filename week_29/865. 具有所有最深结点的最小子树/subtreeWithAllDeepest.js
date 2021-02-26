/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
  let depth = new Map();
  depth.set(null, -1);
  dfs(root, null, depth);
  max_depth = -1;

  for(let value of map.values()) {
    max_depth = Math.max(max_depth, value);
  }

  return answer(root);
};

var dfs = (node, parent, depth) => {
  if (node) {
    depth.set(node, depth.get(parent) + 1);
    dfs(node.left, node, depth);
    dfs(node.right, node, depth);
  }
}

var answer = (node) => {
  if (node == null || depth.get(node) == max_depth) {
    return node;
  }

  let L = answer(node.left);
  let R = answer(node.right);

  if (L && R) return node;
  if (L) return L;
  if (R) return R;
  return null;
}