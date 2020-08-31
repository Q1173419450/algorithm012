let successor = null;
function reverseN(head, n) {
    if (n == 1) {
        successor = head.next;
        return head;
    }

    let last = reverseN(head.next, n - 1);
    head.next.next = head;
    head.next = successor;
    return last
}