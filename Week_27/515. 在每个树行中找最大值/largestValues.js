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
 * @return {number[]}
 */
/* bfs */
var largestValues = function(root) {
  if (!root) return [];  
  let queue = [];
  let ans = [];

  queue.push(root)

  while (queue.length) {
    let max = -Infinity;
    let size = queue.length;
    for(let i = 0; i < size; i++) {
      let node = queue.shift();
      max = Math.max(max, node.val);

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    ans.push(max);
  }
  return ans;
};

/* dfs */
var largestValues = function(root) {
  let res = [];
  dfs(root, res, 1)
  return res;
}

var dfs = (root, res, level) => {
  if (root == null) return;

  if (level == res.length + 1) {
    res.push(root.val);
  } else {
    res[level - 1] = Math.max(res[level - 1], root.val);
  }

  dfs(root.left, res, level + 1);
  dfs(root.right, res, level + 1);
}