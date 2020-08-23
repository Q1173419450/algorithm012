/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/* 暴力递归 - 最优子结构 */
/* 面向过程 */
var rob = function(root) {
  if (root === null) return 0;

  let money = root.val;
  if (root.left != null) {
    money += (rob(root.left.left) + rob(root.left.right));
  }

  if (root.right != null) {
    money += (rob(root.right.left) + rob(root.right.right));
  }

  return Math.max(money, rob(root.left) + rob(root.right))
};

/* 记忆化 - 解决重复子问题 */
function rob(root) {
  let memo = new Map();

  return robInternal(root, memo);
}

function robInternal(root, memo) {
  if (root === null) return 0;
  if (memo.has(root)) return memo.get(root);
  let money = root.val;

  if (root.left != null) {
    money += (robInternal(root.left.left, memo) + robInternal(root.left.right, memo));
  }

  if (root.right != null) {
    money += (robInternal(root.right.left, memo) + robInternal(root.right.right, memo));
  }

  let result = Math.max(money, robInternal(root.left, memo) + robInternal(root.right, memo));

  memo.set(root, result);

  return result
}

/* 按状态分 */
// 动态规划、深度优先搜素
function rob(root) {
  let result = robInternal(root)
  return Math.max(result[0], result[1]);
}


function robInternal(root) {
  if (root === null) return [0, 0];

  let result = [0, 0];

  let left = robInternal(root.left);
  let right = robInternal(root.right);

  result[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  result[1] = left[0] + right[0] + root.val;
  
  return result
}