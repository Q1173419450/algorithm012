/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if(!head || !head.next) return true;
  let dummyHead = new ListNode(0);
  let slow = dummyHead;
  let fast = dummyHead;
  dummyHead.next = head;
  while(fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }
  // let cur = slow.next;  //第二个链表
  let pre = null;
  // slow.next = null;
  fast = dummyHead.next;  // 第一个链表

  cur = reverseList(slow.next)
  
  while(pre) {
    if(slow.val != pre.val) {
      return false
    }
    slow = slow.next;
    pre = pre.next;
  }

  return true
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

var isPalindrome = function(head) {
  if(!head || !head.next) return head

  return compileList(head, searchList(reverseList(head)));
}

var searchList = function(head) {
  let slow = head;
  let fast = head;
  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow
}

var reverseList = function(head) {
  let cur = head;
  let pre = null;

  while(cur) {
    let temp = cur.next;
    cur.next = pre;

    pre = cur
    cur = temp
  }

  return pre;
}

var compileList = function(left, right) {
  while(right) {
    if (left.val != right.val) return false;
    left = left.next;
    right = right.next;
  }
  return true
}