/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if(!head || !head.next) return null;

  let slow = head;
  let fast = head;
  while (slow) {
    if(!fast || !fast.next) return null;

    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {  // 相遇点不一定是打结点
      fast = head;
      while (true) {
        if (fast === slow) return fast;
        slow = slow.next;
        fast = fast.next;
      }
    }
  }
  return null;
}