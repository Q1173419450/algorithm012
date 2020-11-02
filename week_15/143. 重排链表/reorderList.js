/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next || !head.next.next) return head;
    let slow = head;
    let fast = head;
    while(fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    let newHead = slow.next;
    slow.next = null;

    while(newHead) {
      let temp = newHead.next;
      newHead.next = head.next;
      head.next = newHead;
      head = newHead.next;
      newHead = temp;
    }
};

var reverseList = function(head) {
  if(!head) return null;

  let cur = head;
  let pre = null;

  while(cur) {
    let temp = cur.next;
    cur.next = pre;

    pre = cur;
    cur = temp;
  }

  return pre
}