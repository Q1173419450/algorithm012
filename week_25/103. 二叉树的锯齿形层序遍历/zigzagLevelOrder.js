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
/* Bfs */
var zigzagLevelOrder = function(root) {
  if (!root) return [];

  const ans = [];
  const queue = [root];

  let leftRight = true;
  while (queue.length) {
    let level = [];
    let size = queue.length;
    for(let i = 0; i < size; i++) {
      let node = queue.shift();
      if (leftRight) {
        level.push(node.val);
      } else {
        level.unshift(node.val);
      }

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    ans.push(level);
    leftRight = !leftRight;
  }
  return ans;
};

/* dfs */
var zigzagLevelOrder = function(root) {
  if (!root) return [];
  let res = [];
  dfs(root, 0, res);
  return res;
}

var dfs = function(root, level, res) {
  if (!root) return

  if (res.length < level) {
    res.push([]);
  }

  if (level % 2 == 0) {
    res[level].push(root.val);
  } else {
    res[level].unshift(root.val);
  }

  dfs(root.left, level + 1, res);
  dfs(root.right, level + 1, res);
}