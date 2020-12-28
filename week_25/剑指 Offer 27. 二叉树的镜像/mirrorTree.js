/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
/* 递归 */
var mirrorTree = function(root) {
  if (!root) return null;
  let temp = root.left;
  root.left = mirrorTree(root.right);
  root.right = mirrorTree(temp);
  return root;
};

/* 队列 */
var mirrorTree = function(root) {
  if(!root) return null;

  let queue = [root];
  while (queue.length) {
    let node = queue.pop();
    let temp = node.left;
    node.left = node.right;
    node.right = temp;

    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return root;
}

/* 栈 */
var mirrorTree = function(root) {
  if(!root) return null;

  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);

    let temp = node.left;
    node.left = node.right;
    node.right = temp;
  }
}