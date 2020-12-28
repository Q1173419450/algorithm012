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
  if (!root) return [];
  let queue = [root];
  let res = [];
  while (queue.length) {
    let ans = [];
    let size = queue.length;
    for(let i = 0; i < size; i++) {
      let node = queue.shift();
      ans.push(node.val);

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.push(ans);
  }
  return res;
};