var detectCycle = function(head) {
  let slow = head;
  let fast = head;

  while(fast) {
    if(!fast.next) return null

    slow = slow.next;
    fast = fast.next.next;

    if(fast === slow) {
      fast = head;  // 快指针指向起始位置，步数改为1
      while(true) {
        if(slow === fast) return fast;
        slow = slow.next;
        fast = fast.next;
      }
    }
  }

  return null
}