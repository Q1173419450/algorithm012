/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

//  O(n)

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let result = []
  var perOrderTraverseNode = (node) => {
    if (node) {
      result.push(node.val);
      perOrderTraverseNode(node.left);
      perOrderTraverseNode(node.right);
    }
  }
  perOrderTraverseNode(root);

  return result;
};

var preorderTraversal = function (root) { // 比递归快
  const list = [];
  const stack = [];

  if (root) stack.push(root);
  while(stack.length > 0) {
    const curNode = stack.pop();

    list.push(curNode.val);
    if (curNode.left !== null) {
      stack.push(curNode.left);
    }

    if (curNode.right !== null) {
      stack.push(curNode.right);
    }
    
  }

  return list;
}