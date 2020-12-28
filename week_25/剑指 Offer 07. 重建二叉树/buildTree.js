/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
/* 前序遍历的第 1 个结点一定是二叉树的根结点； */
var buildTree = function(preorder, inorder) {
  let preLen = preorder.length;
  let inLen = inorder.length;

  if (preLen != inLen) return null;
  let reverse = new Map();
  for(let i = 0; i < inLen; i++) {
    reverse.set(inorder[i], i);
  }

  return build(0, preLen - 1, 0, inLen - 1, preorder, reverse);
};

var build = function(preL, preR, inL, inR, preorder, reverse) {
  if (preL > preR || inL > inR) return null;

  let pivot = preorder[preL];
  let root = new TreeNode(pivot);

  let pivotIndex = reverse.get(pivot);

  // 前序和中序的左子树
  root.left = build(preL + 1, preL + (pivotIndex - inL), inL, pivotIndex - 1);
  // 前序和中序的右子树
  root.right = build(preL + (pivotIndex - inL) + 1, preR, pivotIndex + 1, inR);
  return root;
}