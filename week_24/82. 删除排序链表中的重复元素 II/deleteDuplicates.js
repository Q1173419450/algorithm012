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
/* hash map */
var deleteDuplicates = function(head) {
  if (!head || !head.next) return head;
  let map = new Map();
  let arr = [];
  let p = head;
  while (p) {
    let val = p.val;
    if (map.has(val)) {
      map.set(val, map.get(val) + 1);
    } else {
      map.set(val, 1);
    }
    p = p.next;
  }

  console.log(map)
  for(let [key, value] of map.entries()) {
    if(map.get(value) == 1) {
      arr.push(value);
    }
  }
  arr = arr.sort((a, b) => a - b);
  let dummy = new ListNode(-1);
  let current = dummy;
  for(let i of arr) {
    let temp = new ListNode(i);
    current.next = temp;
    current = current.next;
  }

  return dummy.next;
};

/* 双指针 */
var deleteDuplicates = function(head) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let a = dummy;
  let b = dummy.next;
  while (b && b.next) {
    if (a.next.val !== b.next.val) {
      a = a.next;
      b = b.next;
    } else {
      while (b && b.next && a.next.val == b.next.val) {
        b = b.next;
      }
      a.next = b.next;
      b = b.next;
    }
  }

  return dummy.next;
}