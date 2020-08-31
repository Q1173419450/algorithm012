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
var reverseKGroup = function(head, k) {
    if (head == null || head.next == null) {
        return head;
    }

    let tail = head;
    for(let i = 0; i < k; i++) {
        if (tail == null) {
            return head
        }

        tail = tail.next;
    }
    let newHead = reverse(head, tail);
    head.next = reverseKGroup(tail, k);

    return newHead;
};

function reverse(head, tail) {
    let pre = null;
    let next = null;

    while(head !== tail) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }

    return pre
}