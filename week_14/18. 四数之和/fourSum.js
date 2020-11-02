var fourSum = function(nums, target) {
  // 排序
  nums = nums.sort((a, b) => a - b);
  let len = nums.length;
  let ans = [];
  // 固定 a,b 在左边
  // 定义双指针 c,d 偏大时，d 左移，偏小时c右移
  for(let a = 0; a < len - 3; a++) {
    // 剪枝 当前值和上一个值
    if(a > 0 && nums[a] === nums[a - 1]) continue;
    for(let b = a + 1; b < len - 2; b++) {
      if(b > a + 1 && nums[b] === nums[b - 1]) continue;
      let c = b + 1;
      let d = len - 1;

      while(c < d) {
        if(nums[a] + nums[b] + nums[c] + nums[d] < target) {
          c++
        } else if(nums[a] + nums[b] + nums[c] + nums[d] > target) {
          d--
        } else {
          while(c < d && nums[c + 1] === nums[c]) c++;
          while(c < d && nums[d - 1] === nums[d]) d--;
          let temp = [nums[a], nums[b], nums[c], nums[d]];
          ans.push(temp);
          c++;
          d--;
        }
      }
    }
  }

  return ans;
}

let nums = [-2,-1,-1,1,1,2,2];
let target = 0;
console.log(fourSum(nums, target));