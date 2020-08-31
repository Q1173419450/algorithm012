function reverse(head) {
    if (head.next == null) return head;

    let last = reverse(head.next);
    head.next.next = head;  // 反转指针
    head.next = null;   // 最后head 指向 null
    return last;
}