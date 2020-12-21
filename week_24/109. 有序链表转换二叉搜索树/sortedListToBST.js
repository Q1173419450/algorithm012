/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
/* 二分法 */
/* 
  时间 O（n）
  空间 O（n）
*/
var sortedListToBST = function(head) {
    if(!head) return head;
    let arr = [];
    while (head) {
      arr.push(head.val);
      head = head.next;
    }

    const buildBST = (start, end) => {
      if (start > end) return null;
      const mid = (start + end) >> 1;
      const root = new TreeNode(arr[mid]);

      root.left = buildBST(start, mid - 1);
      root.right = buildBST(mid + 1, end);
      return root;
    }

    return buildBST(0, arr.length - 1);
};

/* 快慢指针 */
/* 
  时间 NlogN
  空间 logN
*/
var sortedListToBST = function(head) {
  if (!head) return null;

  let slow = head;
  let fast = head;
  let preSlow;

  while (fast && fast.next) {
    preSlow = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  const root = new TreeNode(slow.val);
  if (preSlow) {
    preSlow.next = null;
    root.left = sortedListToBST(head);
  }

  root.right = sortedListToBST(slow.next);
  return root;
}

/* 中序遍历 */
/* 
  时间：O(n)
  空间：O(logn)
*/
var sortedListToBST = function(head) {
  if(!head) return head;
  let len = 0;
  let h = head;
  while (head) {
    len++;
    head = head.next;
  }

  const buildBST = (start, end) => {
    if (start > end) return null;

    const mid = (start + end) >> 1;
    const left = buildBST(start, mid - 1);

    const root = new TreeNode(h.val);
    h = h.next;
    root.left = left;
    root.right = buildBST(mid + 1, end);
    return root;
  }

  return buildBST(0, len - 1);
}