/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var inorderTraversal = function(root) {
//     let result = [];

//     var inOrderNode = (node) => {
//         if (node) {
//             inOrderNode(node.left);
//             result.push(node.val);
//             inOrderNode(node.right);
//         }
//     }

//     inOrderNode(root);

//     return result
// };

var inorderTraversal = function(root) {
  let result = [];
  let stack = [];


  while(root!== null || stack.length > 0) {
    if(root.left) {
      stack.push(root);
      root = root.left;
    } else if (!root.left && !root.right) {
      result.push(root.val);
      root = stack.pop();
      root && (root.left = null)
    } else {
      result.push(root.val);
      root = root.right;
    }
  }

  return result
}