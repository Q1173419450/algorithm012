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
var buildTree = function(preorder, inorder) {
  return buildTreeHelper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};

function buildTreeHelper(preorder, p_start, p_end, inorder, i_start, i_end) {
  console.log(p_start, p_end)

  // 树为空
  if(p_start > p_end) {
    return null
  }

  // 获取根节点
  let root_val = preorder[p_start];
  let root = new TreeNode(root_val);

  // 找到中序遍历的根节点
  for(let i = i_start; i < i_end; i++) {
    if (inorder[i] == root_val) {
      i_root_index = i;
      break;
    }
  }

  let leftNum = i_root_index - i_start;

  // 递归找左子树
  root.left = buildTreeHelper(preorder, p_start + 1, p_start + leftNum, inorder, i_start, i_root_index - 1);

  // 递归找右子树
  root.right = buildTreeHelper(preorder, p_start + leftNum + 1, p_end, inorder, i_root_index + 1, i_end);

  return root;
}

/* 
  但存在一个问题，在中序遍历中找到根节点的位置每次都得遍历中序遍历的数组去寻找
  用一个HashMap把中序遍历数组的每个元素的值和下标存起来，这样寻找根节点的位置就可以直接得到了。
  https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by--22/
*/