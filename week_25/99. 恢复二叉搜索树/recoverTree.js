/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let list = [];
  var dfs = function(node) {
    if (node == null) return;
    
    dfs(node.left);
    list.push(node);
    dfs(node.right);
  }
  dfs(root);

  let x = null;
  let y = null;
  for(let i = 0; i < list.length - 1; i++) {
    if (list[i].val > list[i + 1].val) {
      y = list[i + 1];
      if (x == null) {
        x = list[i];
      }
    }
  }
  if (x && y) {
    let temp = x.val;
    x.val = y.val;
    y.val = temp;
  }
};

var recoverTree = function(root) {
  let list = [];
  let pre = null;
  let x = null;
  let y = null;
  var dfs = function(node) {
    if (node == null) return;
    
    dfs(node.left);
    if (pre == null) {
      pre = node;
    } else {
      if (pre.val > node.val) { //比较上一个节点和当前节点
        y = node;
        if (x == null) {
          x = pre;
        }
      }
      pre = node;
    }
    dfs(node.right);
  }
  dfs(root);

  if (x && y) {
    let temp = x.val;
    x.val = y.val;
    y.val = temp;
  }
}