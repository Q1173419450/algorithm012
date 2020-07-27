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
/* 
  递归
  时间：O(N)
  空间：O(N)  在最坏情况下栈内需要存放 O(h)O(h) 个方法调用，其中 hh 是树的高度。由于 h\in O(n)h∈O(n)，可得出空间复杂度为 O(n)。
*/
// var invertTree = function(root) {
//   if (root == null) {
//     return null;
//   }

//   let right = invertTree(root.right);
//   let left = invertTree(root.left);

//   root.left = right;
//   root.right = left;

//   return root;
// };

/* 
  迭代
  时间：O(n)
  空间：O(N)
*/
var invertTree = function(root) {
  if (root == null) return null;

  let queue = [];
  queue.push(root)

  while(queue.length) {
    let current = queue.pop()
    let temp = current.left;
    current.left = current.right;
    current.right = temp;

    if (current.left != null) queue.push(current.left);
    if (current.right != null) queue.push(current.right);
  }

  return root;
}