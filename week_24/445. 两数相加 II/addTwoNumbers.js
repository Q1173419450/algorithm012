/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let stack1 = [];
  let stack2 = [];

  if (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }

  if (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  let carry = 0;
  let head = null;
  while (stack1.length || stack2.length || carry > 0) {    
    let sum = carry;
    sum += stack1.length ? stack1.pop() : 0;
    sum += stack2.length ? stack2.pop() : 0;
    let node = new ListNode(Math.floor(sum / 10));
    
    node.next = head; // 因为是倒叙的，所以新增的数组需要插在链表前面
    head = node;  // 再将组合好的 node 放回 head 中
    carry = sum % 10;
  }

  return head;
};

/* js */
/*
 * @lc app=leetcode id=445 lang=javascript
 *
 * [445] Add Two Numbers II
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const stack1 = [];
  const stack2 = [];
  const stack = [];

  let cur1 = l1;
  let cur2 = l2;
  let curried = 0;

  while (cur1) {
    stack1.push(cur1.val);
    cur1 = cur1.next;
  }
  while (cur2) {
    stack2.push(cur2.val);
    cur2 = cur2.next;
  }

  let a = null;
  let b = null;
  while (stack1.length > 0 || stack2.length > 0) {
    a = Number(stack1.pop()) || 0;
    b = Number(stack2.pop()) || 0;

    stack.push((a + b + curried) % 10);

    if (a + b + curried >= 10) {
      curried = 1;
    } else {
      curried = 0;
    }
  }

  if (curried === 1) {
    stack.push(1);
  }

  const dummy = {};
  let current = dummy;
  while (stack.length > 0) {
    current.next = {
      val: stack.pop(),
      next: null
    };
    current = current.next;
  }
  return dummy.next;
};