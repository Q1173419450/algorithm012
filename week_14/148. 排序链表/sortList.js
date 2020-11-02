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
var sortList = function(head) {
  if(!head || !head.next) return head;

  let midNode = middleNode(head);
  let rightHead = midNode.next;
  midNode.next = null;

  let left = sortList(head);
  let right = sortList(rightHead);

  return mergeTwoLists(left, right);
};

//  找到链表中间节点（876. 链表的中间结点）
var middleNode = function (head) {
  // 分割 cut 环节 使用快慢指针
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

// 合并两个有序链表（21. 合并两个有序链表）
var mergeTwoLists = function(l1, l2) {
  let dummryHead = new ListNode(-1);
  let current = dummryHead;

  while(l1 && l2) {
    if(l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  current.next = l1 ? l1 : l2;
  return dummryHead.next;
}