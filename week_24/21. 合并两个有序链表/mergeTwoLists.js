/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/* https://leetcode-cn.com/problems/merge-two-sorted-lists/solution/xin-shou-you-hao-xue-hui-tao-lu-bu-fan-cuo-4nian-l/ */
// 递归
var mergeTwoLists = function(l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}

// 迭代
var mergeTwoLists = function(l1, l2) {
  let dummyHead = new ListNode(-1); // 亚节点、头节点
  let current = dummyHead;  // 游标节点
  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;  // 拼接
      l1 = l1.next; // 指向下一个节点
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 ? l1 : l2;
  return dummyHead.next;
}