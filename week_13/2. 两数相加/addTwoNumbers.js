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
var addTwoNumbers = function(l1, l2) {
  let head = new ListNode(0);
  let carry = 0;

  let p = l1, q = l2, current = head;

  while(p || q) {
    let x = p.val;
    let y = q.val;

    let sum = carry + x + y; // 俩数和
    carry = Math.floor(sum / 10);
    sum = sum % 10;

    current.next = new ListNode(sum);
    current = current.next;

    if(p) p = p.next;
    if(q) q = q.next;
  }

  if(carry > 0) {
    current.next = new ListNode(carry);
  }

  return head.next;
};