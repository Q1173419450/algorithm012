/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
  if (!pre) return null;
  return dfs(pre, 0, pre.length - 1, post, 0, post.length - 1);
};

// let dfs = (pre, preStart, preEnd, post, postStart, postEnd) => {
//   if (!pre) return null;
//   if (pre.length == 1) return new TreeNode(pre[0]);

//   let pivot = pre[preStart];
//   let root = new TreeNode(pivot);
//   let n = pre.length;

//   for(let i = 0; i < post.length; i++) {
//     if (pre[1] === post[i]) {
//       let left_count = i + 1;

//       root.left = dfs(pre, 1, left_count + 1, post, left_count + 1, n);
//       root.right = dfs(pre, 0, left_count + 1, post, left_count, n - 1);
//       break;
//     }
//   }

//   return root;
// }