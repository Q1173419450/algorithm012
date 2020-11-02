/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  let dummyHead = new ListNode(0);
  dummyHead.next = head;

  let g = dummyHead;
  let p = dummyHead.next;

  let step = 0;
  while(step < m - 1) { // 指针移动到对应位置
    g = g.next;
    p = p.next;
    step++;
  }

  // 头插法
  for(let i = 0; i < n - m; i++) {
    let removed = p.next; // p 后面的元素删除
    console.log(removed, p.next.next)
    p.next = p.next.next;

    removed.next = g.next;
    g.next = removed;
  }

  return dummyHead.next;
};

var reverseBetween = function(head, m, n) {
  let dummyHead = new ListNode(0);
  dummyHead.next = head;

  let p1 = dummyHead;
  let p2 = dummyHead;
  for(let i = 0 ; i < m - 1; i++) { // 找到 m 之前的节点
    p2 = p2.next;
  }

  for(let i = 0; i < n + 1; i++) {  // 找到 n 之后的节点
    p1 = p1.next;
  }

  let t = p2.next;  // 找到 m 节点，也就是 p2 后面
  let h = reverseN(t, n - m + 1); // h 节点
  p2.next = h;  // 将 h 节点拼接到 p2 后
  t.next = p1;  // 将 p1 拼接到 t 后

  return dummyHead.next;
}

var reverseN = function(head, n) {
  let prev = null;
  let cur = head;

  for(let i = 0; i < n; i++) {
    let temp = cur.next;
    cur.next = prev;

    prev = cur;
    cur = temp;
  }

  return prev;
}