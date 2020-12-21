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
/* 迭代 */
var addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;
  let p = l1, q = l2;

  while (p || q) {
    let x = p.val ? p.val : 0;
    let y = q.val ? q.val : 0;

    let sum = carry + x + y;
    let carry = Math.floor(sum / 10);
    sum %= 10;

    current.next = new ListNode(sum);
    current = current.next;

    if (p) p = p.next;
    if (q) q = q.next;
  }

  if (carry) {
    current.next = new ListNode(carry);
  }

  return head.next;
}

/* 递归 */
var addTwoNumbers = function(l1, l2) {
  return add(l1, l2, 0);
}

var add = function(p, q, carry) {
  if(!p || !q) {
    return carry ? new ListNode(1) : null;
  }

  p = p ? p : new ListNode(0);
  q = q ? q : new ListNode(0);
  
  let sum = carry + p.val + q.val;
  carry = Math.floor(sum / 10);
  sum %= 10;
  p.val = sum;

  p.next = add(p.next, q.next, carry);

  return a;
}