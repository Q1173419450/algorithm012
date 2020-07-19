
/* 
  暴力求解
  O(kN)
  O(N)
*/
// function maxSlidingWindow (nums: number[], k: number) {
//   if (k <= 1) return nums;
//   const res = [];
//   for(let i = 0; i < nums.length - k + 1; i++) {
//     console.log(nums.slice(i, i + k))
//     res.push(Math.max(...nums.slice(i, i + k)));
//   }

//   return res
// }

/* 
  双端队列
  O(n)  由于每个元素只有 1 次机会进出双端队列，所以时间复杂度是O(N)。
  O(N)
*/
function maxSlidingWindow (nums: number[], k: number) {
  if(k === 0) return [];
  const len = nums.length;

  if (len <= 1 ) return nums;

  const deque = [];
  for(let i = 0; i < k; i++) {
    clearDeque(deque, nums, i, k)
    deque.push(i);
  }

  const res = [];
  res.push(nums[deque[0]]);

  for(let i = k; i < len; i++) {
    clearDeque(deque, nums, i, k)
    deque.push(i)
    res.push(nums[deque[0]])  // 每次都取首位最大数
  }

  return res;
}

function clearDeque(queue: number[], nums: number[], idx: number, k: number) {
  // 清除不属于滑动窗口的数
  if (queue.length && idx >= k + queue[0]) {
    queue.shift()
  }

  // 取最大值
  while(queue.length && nums[idx] > nums[queue[queue.length - 1]]) {
    queue.pop();
  }
}

let res = maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3);
console.log(res)