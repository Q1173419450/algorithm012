/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  let res = [];
  const helper = (root, temp = [], sum) => {
    if (root === null) return null

    if (root.left === null && root.right === null) {
      if (sum === root.val) {
        temp.push(root.val)
        res.push(temp.slice());
        temp.pop();
        return
      }
    }
    
    let node = root.val;
    temp.push(node)

    helper(root.left, temp, sum - node)
    helper(root.right, temp, sum - node)

    temp.pop()
  }

  helper(root, [], sum);

  return res
};