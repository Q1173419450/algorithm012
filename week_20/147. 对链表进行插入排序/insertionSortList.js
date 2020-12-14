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
var insertionSortList = function(head) {
  if (!head || !head.next) return head;
  let dummyHead = new ListNode(-1);
  let prev = head;
  let node = head.next;
  while(node) {
    if (node.val < prev.val) {
      let temp = dummyHead;
      while(temp.next.val < node.val) {
        temp = temp.next;
      }
      prev.next = node.next;
      node.next = temp.next;
      temp.next = node;
      node = prev.next;
    } else {
      prev = prev.next;
      node = node.next;
    }
  }
  return dummyHead.next;
};

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
var insertionSortList = function(head) {
  if (!head || !head.next) return head;
  let dummy = new ListNode(-1);
  let pre = head;
  let cur = head.next;
  dummy.next = head;
  while(cur) {
    if (pre.val <= cur.val) {
      pre = cur;
      cur = cur.next;
    } else {
      let p = dummy;
      while(p.next != cur && p.next.val < cur.val) {
        p = p.next;
      }
      pre.next = cur.next;
      cur.next = p.next;
      p.next = cur;
      // 完成插入后，cur 回到 pre 后面
      cur = pre.next;
    }

  }
  return dummy.next;
}