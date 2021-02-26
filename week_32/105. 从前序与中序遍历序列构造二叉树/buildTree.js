/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
/* 递归 */
var buildTree = function(preorder, inorder) {
  return dfs(preorder, 0, preorder.length, inorder, 0, inorder);
};

const dfs = function (preorder, p_start, p_end, inorder, i_start, i_end) {
  if (p_start == p_end) return null;

  let root_val = preorder[p_start];
  let root = new TreeNode(root_val);
  let i_root_index = 0;

  // 找到根节点
  for(let i = i_start; i < i_end; i++) {
    if (inorder[i] == root_val) {
      i_root_index = i;
      break; 
    }
  }

  // 左子树的节点数
  let leftNum = i_root_index - i_start;
  root.left = dfs(preorder, p_start + 1, p_start + leftNum + 1, inorder,  i_start, i_root_index);
  root.right = dfs(preorder, p_start + leftNum + 1, p_end, inorder,  i_root_index, i_end);
  return root;
}

/* hash 递归 */
var buildTree = function(preorder, inorder) {
  let map = new Map();
  for(let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  return dfs(preorder, 0, preorder.length, inorder, 0, inorder, map);
};

const dfs = function (preorder, p_start, p_end, inorder, i_start, i_end, map) {
  if (p_start == p_end) return null;

  let root_val = preorder[p_start];
  let root = new TreeNode(root_val);
  let i_index = map(root_val);
  let leftNum = i_index - i_start;
  root.left = dfs(preorder, p_start + 1, p_start + leftNum + 1, inorder, i_start, i_index, map);
  root.right = dfs(preorder, p_start + leftNum + 1, p_end, inorder, i_index + 1, i_end, map);
  return root;
}