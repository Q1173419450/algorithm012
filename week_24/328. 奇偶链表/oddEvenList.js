/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/*  */
var oddEvenList = function(head) {
    if (!head) return head;

    let odd = head;
    let even = head.next;
    let evenHead = even;
    while (even && even.next) {
      odd.next = even.next; // 奇数节点的下一个节点指向偶数节点的下一个节点
      odd = odd.next;   // 奇数节点推进到下一个节点
      even.next = odd.next; // 偶数节点的next是奇数节点的next节点
      even = even.next;
    }
    odd.next = evenHead;
    return head;
};