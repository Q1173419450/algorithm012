/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
  let base = 0, count = 0, maxCount = 0;
  let answer = [];

  const update = (x) => { // 获取众数
    if (x === base) { // 数值相等则计数加一
      ++count;
    } else {
      count = 1;
      base = x;
    }

    if(count === maxCount) {
      answer.push(base);
    }

    if (count > maxCount) {
      maxCount = count;
      answer = [base];
    }
  }

  let stack = [];
  while(root || stack.length) {
    while(root != null) {
      stack.push(root)
      root = root.left;
    }

    const node = stack.pop();
    update(node.val);
    root = node.right;
  }

  // let cur = root, pre = null;
  // while(cur) {  // 中序遍历 左根右
  //   if (cur.left === null) {
  //     update(cur.val);
  //     cur = cur.right;
  //     continue;
  //   }

  //   pre = cur.left;
  //   while(pre.right && pre.right !== cur) {
  //     pre = pre.right;
  //   }

  //   if (pre.right === null) {
  //     pre.right = cur;
  //     cur = cur.left;
  //   } else {
  //     pre.right = null;
  //     update(cur.val);
  //     cur = cur.right;
  //   }
  // }

  return answer;
};