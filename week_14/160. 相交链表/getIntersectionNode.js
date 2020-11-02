/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
/* 暴力 */
var getIntersectionNode = function(headA, headB) {
  while(headA) {
    headA.flag = 1;
    headA = headA.next
  }

  while(headB) {
    if(headB.flag) return headB;
    headB = headB.next;
  }

  return null
}

/* 双指针 */
/* 
设长-短链表为 C，短-长链表为 D （分别代表长链表在前和短链表在前的拼接链表），
则当 C 走到长短链表交接处时，D 走在长链表中，且与长链表头距离为 长度差;
消除长度差，接着走时，就能找到对应相交节点
*/
var getIntersectionNode = function(headA, headB) {
  let hA = headA; 
  let hB = headB;
  while(hA !== hB) {
    hA = hA ? hA.next : headB;
    hB = hB ? hB.next : headA;
  }

  return hA
};