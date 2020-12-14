/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let res = [];
  let map = {};
  for(let nums of nums1) {
    map[nums] = true;
  }

  for(let nums of nums2) {
    if (map[nums]) {
      map[nums] = false;
      res.push(nums);
    }
  }
  
  return res;
};