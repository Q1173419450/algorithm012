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

function reverseBetween(head, m, n) {
    if (m == 1) {
        return reverseN(head, n);
    }

    head.next = reverseBetween(head.next, m - 1, n - 1);
    return head
}