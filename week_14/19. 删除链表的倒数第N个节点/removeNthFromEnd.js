/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
/* 俩次遍历 */
var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let len = 0;
    while(head) {
        len++
        head = head.next;
    }
    let current = dummyHead;
    for(let i = 0; i < len - n + 1; i++) {
        cur = cur.next;
    }
    cur.next = cur.next.next;
    return dummyHead.next;
};

/* 栈 */
var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let stack = [];
    while(head) {
        stack.push(head);
    }

    for(let i = 0; i < n; i++) {
        stack.pop();
    }

    let target = stack.pop();
    target.next = target.next.next;
    return dummyHead.next;
}

/* 一次遍历 */
var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let first = head;
    let second = dummyHead;
    for(let i = 0; i < n; i++) {
        first = first.next;
    }

    while(first) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummyHead.next;
}