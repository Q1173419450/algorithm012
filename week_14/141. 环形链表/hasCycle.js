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
/* hash表 */
var hasCycle = function(head) {
    let set = new Set();
    while(head) {
      if(set.has(head)) {
        return true
      }
      set.add(head);
      head = head.next;
    }

    return false
};

/* O(1) 空间复杂度 */
var hasCycle = function(head) {
  if(!head || !head.next) return false
  let slow = head;
  let fast = head.next;
  while(slow != fast) {
    if(!fast || !fast.next) return false
    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
}

var hasCycle = function(head) {
  if(!head || !head.next) return false

  let slow = head;
  let fast = head;

  while(fast) {
    if(!fast || !fast.next) return false;

    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast) return true
  }

  return false
}