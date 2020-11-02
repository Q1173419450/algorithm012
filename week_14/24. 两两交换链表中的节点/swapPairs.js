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
/* 迭代 */
/* 画图即可解释 */
var swapPairs = function(head) {
    let thead = new ListNode(0);
    thead.next = head;
    let temp = thead;
    while(temp.next && temp.next.next) {
      let start = temp.next;
      let end = temp.next.next;

      temp.next = end;
      start.next = end.next;

      end.next = start; //  end 的指针指向start
      temp = start;
    }
    return thead.next;
};

/* 递归 */
var swapPairs = function(head) {
  if(!head || !head.next) return head;

  let start = head; // 定义俩个指针 start、end
  let end = head.next;

  start.next = swapPairs(end.next); // 不要递归到下一级，可以直接看成 start.next = end.next
  end.next = start; // end 的指针指向start

  return end; // 最终整个节点是从 end开始，所以返回 end
}