/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
  // 当 A 或 B 为空则返回不匹配，若 以 A 为根的子树包含 B，树 B 是 A 的左子树、树 B 是 A 的右子树
  return (A != null && B != null) && (recue(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B));
};

var recue = (A, B) => {
  if (!B) return true;  // 为空证明匹配完成，返回 true
  if (A == null || A.val != B.val) return false;  // A为空则说明匹配A节点失败

  return recue(A.left, B.left) && recue(A.right, B.right);  //  判断 A B 的左右节点是否相等
}