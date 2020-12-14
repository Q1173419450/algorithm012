/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
 return arr.sort((a, b) => a.toString(2).split('1').length - b.toString(2).split('1').length || a - b)
};

function sortByBits(arr) {
  return arr.sort((a, b) => countBits(a) - countBits(b) || a - b);
}

function countBits(n) {
  let count = 0;
  while(n != 0) {
    count += n & 1;
    n >>= 1;
  }
  return count
}

let res = sortByBits([1024,512,256,128,64,32,16,8,4,2,1])
console.log(res);