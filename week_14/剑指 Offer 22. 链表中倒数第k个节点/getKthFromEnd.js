/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
/* 指针指不对 */
var getKthFromEnd = function(head, k) {
  if(!head || !head.next) return head
  let slow = head;
  let fast = head;
  for(let i = 0; i < k; i++) {
    if(!fast) return null
    fast = fast.next;
  }
  while(fast) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow
};