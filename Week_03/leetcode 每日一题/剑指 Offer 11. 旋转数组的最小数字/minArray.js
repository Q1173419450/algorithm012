/**
 * @param {number[]} numbers
 * @return {number}
 */
/* 错误解法 */
// var minArray = function(numbers) {
//   for(let i = 1; i < numbers.length - 1; i++) {
//     if (numbers[i] < numbers[i + 1] && numbers[i] < numbers[i - 1]) {
//       return numbers[i]
//     }
//   }
// };

console.log(minArray([1,3,5])); // false 在遇到顺序的数组或者低于俩个的数组，好像没办法考虑到

var minArray = function(numbers) {
  let i = 0;
  let j = numbers.length - 1;

  while(i < j) {
    let mid = Math.floor((i + (j - i) / 2))

    if (numbers[mid] > numbers[j]) {
      i = mid + 1;
    } else if (numbers[mid] < numbers[j]) {
      j = mid;
    } else {
      j--
    }
  }

  return numbers[i]
}

console.log(minArray([1,3,5]));