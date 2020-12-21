/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
  let p = root;
  let length = 0;
  while (p) { // 链表长度
    length++;
    p.next;
  }

  let big = length % k;
  let little = len/k | 0;

  let myLen = little;
  let 
};

splitListToParts();