// 递归
/* 
  时间复杂度：O(L1 + L2)
  空间复杂度：O(L1 + L2)
*/
var mergeTwoLists = function(l1, l2) {
  if(!l1) return l2;
  if(!l2) return l1;

  // 比较链表值，谁小，小的值接上大的值
  // 指针下移
  // 遇到某个链表为空，则返回，形成链表
  if(l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2
  }
}

/* 迭代、需要额外的空间 */
/* 
  时间复杂度：O(L1 + L2)
  空间复杂度：O(1)
*/
var mergeTwoLists = function(l1, l2) {
  let durmmyHead = new ListNode(0);
  let current = durmmyHead;

  while(l1 && l2) {
    // 小的值接到新生成的链表中
    if(l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }

    current = current.next; // 指针也要迭代到下一级
  }

  // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
  current.next = l1 ? l1 : l2;
  return durmmyHead.next
}