/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
/* BFS */
var distanceK = function(root, target, K) {
  let parents = new Map();
  
  getParent(root, null, parents); // 找的每个节点的父节点

  let visited = new Set();
  let ans = [];

  let queue = [];
  queue.push(target);

  while (queue.length) {
    if (K-- == 0) {
      while (queue.length) {  // 从目标节点开始扩散，最后得到 距离为K的所有节点
        ans.push(queue.pop().val);
      }
      continue;
    }
    let size = queue.length;
    for(let i = 0; i < size; i++) {
      let node = queue.shift();
      visited.add(node);

      if (node.left && !visited.has(node.left)) { // 遍历左子树
        queue.push(node.left);
      }

      if (node.right && !visited.has(node.right)) { // 遍历右子树
        queue.push(node.right);
      }

      let p = parents.get(node);  // 遍历父亲树
      if (p && !visited.has(p)) queue.push(p);
    }
  }

  return ans;
};

var getParent = function(root, parent, parents) {
  if (root === null) return;
  parents.set(root, parent);
  getParent(root.left, root, parents);
  getParent(root.right, root, parents);
}