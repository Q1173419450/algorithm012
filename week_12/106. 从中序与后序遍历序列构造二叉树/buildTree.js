/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
/* 分治法 */
var buildTree = function(inorder, postorder) {
  let inLen = inorder.length;
  let postLen = postorder.length;

  if (inLen !== postLen) return null

  return helpers(inorder, 0, inLen - 1, postorder, 0, postLen - 1);
};

function helpers(inorder, inStart, inEnd, postorder, postStart, postEnd) {
  if (inStart > inEnd || postStart > postEnd) return null;

  let pivot = postorder[postEnd]; // 寻找每次分治后的根节点
  let pivotIndex = inStart;

  while(inorder[pivotIndex] != pivot) {
    pivotIndex++
  }
  let root = new TreeNode(pivot);

  /* 难点：计算位置关系 */
  root.left = helpers(inorder, inStart, pivotIndex - 1, postorder, postStart, postEnd - inEnd + pivotIndex - 1);
  root.right = helpers(inorder, pivotIndex + 1, inEnd, postorder, postEnd - inEnd + pivotIndex, postEnd - 1);

  return root;
}