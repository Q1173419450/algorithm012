/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let ans = null;
    for(let i = 0; i < lists.length; i++) {
      console.log(ans);
      ans = mergeTwoLists(ans, lists[i]);
    }

    return ans;
};

var mergeTwoLists = function(nums1, nums2) {
  if (nums1 == null || nums2 == null) return nums1 != null ? nums1 : nums2;

  let dummyHead = new ListNode(-1);  //哑节点
  let current = dummyHead;  // 游标节点
  let l1 = nums1, l2 = nums2;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      // 指针赋值
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    // 指针后移
    current = current.next;
  }

  current.next = l1 ? l1 : l2;
  return dummyHead.next;
} 

/* 
  二分法
  时间：O(kn * logk)
  空间：O(logk)
 */
var mergeKLists = function(lists) {
  if(lists == null || lists.length == 0) return null;
  return merge(lists, 0, lists.length - 1);
}

var merge = function(lists, left, right) {
  if (left == right) return lists[left];

  let mid = Math.floor(left + (right - left) / 2);
  let l1 = merge(lists, left, mid);
  let l2 = merge(lists, mid + 1, right);
  return mergeTwoLists(l1, l2);
}

var mergeTwoLists = function(nums1, nums2) {
  if (nums1 == null || nums2 == null) return nums1 != null ? nums1 : nums2;

  let dummyHead = new ListNode(-1);  //哑节点
  let current = dummyHead;  // 游标节点
  let l1 = nums1, l2 = nums2;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      // 指针赋值
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    // 指针后移
    current = current.next;
  }

  current.next = l1 ? l1 : l2;
  return dummyHead.next;
} 

/* api 解法 */
var mergeKLists = function(lists) {
  return lists.reduce((p, n) => {
    while (n) {
      p.push(n);
      n = n.next;
    }
    return p
  }, []).sort((a, b) => a.val - b.val).reduceRight((p, n) => (n.next = p, p = n, p), null);
}

let lists = [[1,4,5],[1,3,4],[2,6]];
let res = mergeKLists(lists);
console.log(res);

/* 优先队列 */