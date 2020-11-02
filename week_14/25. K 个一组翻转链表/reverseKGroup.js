/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(!head || !head.next) return head;
    let tail = head;
    for(let i = 0; i < k; i++) {
      tail = tail.next;
    }
    head.next = reverse(head, tail);
};

var reverse = function(head, tail) {
  let pre = null;
  let next = null
  while(head !== tail) {
    next = head.next; // 存下 next 指针
    head.next = pre;  // 放置 pre

    pre = head;
    head = next;
  }
}