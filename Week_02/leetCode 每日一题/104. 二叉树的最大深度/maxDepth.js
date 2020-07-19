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
/* 递归 */
var maxDepth = function(root) {
  if(!root) {
    return 0;
  } else {
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    return Math.max(left, right) + 1;
  }
};

/* 迭代 */
var maxDepth = function(root) {
  let stack = [
    {
      "key": root,
      "val": 1
    }
  ]

  let depth = 0;
  while(stack.length) {
    let curObj = stack.pop();
    let curNode = curObj.key;
    if (curNode != null) {
      let curNode_depth = curObj.val;
      depth = Math.max(depth, curNode_depth);
      if (curNode.left != null) {
        stack.push({
          "key": curNode.left,
          "val": curNode_depth + 1
        })
      }
      if (curNode.right != null) {
        stack.push({
          "key": curNode.right,
          "val": curNode_depth + 1
        })
      }
    }
  }

  return depth
};
