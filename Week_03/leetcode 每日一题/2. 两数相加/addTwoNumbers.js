/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/* 
  O(max(m,n))
*/
var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0); // 通常需要先初始化一个预先指针 pre，该指针的下一个节点指向真正的头结点head。
  let p = l1,
    q = l2,
    curr = dummyHead;

  let carry = 0;

  while (p != null || q != null) {
    let x = (p != null) ? p.val : 0;
    let y = (q != null) ? q.val : 0;

    let sum = carry + x + y;

    carry = Math.floor(sum / 10);
    sum = sum % 10;
    curr.next = new ListNode(sum);
    curr = curr.next;

    if (p != null) p = p.next;
    if (q != null) q = q.next;
  }

  if (carry > 0) { // 遍历完毕还有进位，则进一位
    curr.next = new ListNode(carry);
  }

  return dummyHead.next;
};