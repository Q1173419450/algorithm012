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
var deleteDuplicates = function(head) {
    let current = head;

    while (current != null && current.next != null) {
        if (current.next.val == current.val) {
            let node = current.next;
            current.next = node.next;
        } else {
            current = current.next;   
        }
    }

    return head
};

