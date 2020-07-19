/* 
  https://leetcode-cn.com/problems/group-anagrams/solution/js-xie-leetcode-by-zhl1232-3/
*/
// var groupAnagrams = function(strs) {
//   let hash = new Map()

//   for(let i = 0; i < strs.length; i++) {
//     let str = strs[i].split('').sort().join();

//     if (hash.has(str)) {
//       let temp = hash.get(str);
//       temp.push(strs[i]);
//       hash.set(str, temp);
//     } else {
//       hash.set(str, [strs[i]]);
//     }
//   }
//   console.log(hash);

//   return [...hash.values()];
// }

/* 算术基本定理，又称为正整数的唯一分解定理，即：每个大于1的自然数，要么本身就是质数，要么可以写为2个以上的质数的积，而且这些质因子按大小排列之后，写法仅有一种方式。 */
var groupAnagrams = function(strs) {
  let res = {};
  let promises = [3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103 ];

  for(let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const hash = str.split('').reduce((sum, s) => {
      return sum * promises[s.charCodeAt(0) - 97]
    }, 1)


    res[hash] ? res[hash].push(str) : res[hash] = [str]
  }

  return Object.values(res);
}

/* 计数 */
// var groupAnagrams = function(strs) {
//   let hash = new Map()

//   for(let i = 0; i < strs.length; i++) {
//     let str = strs[i];
//     let arr = Array(26).fill(0);

//     for(let j = 0; j < str.length; j++) {
//       arr[str.charCodeAt(j) - 97] ++
//     }

//     console.log(arr)
//     let hashKey = arr.join();
//     if (hash.has(hashKey)) {
//       let temp = hash.get(hashKey);
//       temp.push(str);
//       hash.set(hashKey, temp);

//     } else {
//       hash.set(hashKey, [str]);
//     }
//   }

//   return [...hash.values()];
// }


let res = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
console.log(res)