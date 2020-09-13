/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    if (s === '') return false

    let left = 0;
    let right = s.length - 1;

    while(left < right) {   // 双指针夹逼
        let c1 = s.charAt(left);
        let c2 = s.charAt(right);

        if (c1 == c2) {
            left++
            right--
        } else {
            let flag1 = true;
            let flag2 = true;
            for(let i = left, j = right - 1; i < j; i++, j--) { // 不相等时 右指针移动一位
                let c3 = s.charAt(i);
                let c4 = s.charAt(j);
                if (c3 != c4) {
                    flag1 = false;
                    break;
                }
            }
            for(let i = left + 1, j = right; i < j; i++, j--) { // 不相等时 左指针移动一位
                let c3 = s.charAt(i);
                let c4 = s.charAt(j);

                if (c3 != c4) {
                    flag2 = false;
                    break;
                }
            }
            return flag1 || flag2
        }
    }
    return true
};
console.log(validPalindrome('abca'))

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// var validPalindrome = function(s) {
//     if (s === '') return false

//     let left = 0;
//     let right = s.length - 1;

//     while(left < right) {
//         let c1 = s.charAt(left);
//         let c2 = s.charAt(right);

//         if (c1 == c2) {
//             left--
//             right++
//         } else {
//             let flag1 = true;
//             let flag2 = true;

//             while(left < right - 1) {
//                 let c3 = s.charAt(left);
//                 let c4 = s.charAt(right - 1);
//                 if (c3 != c4) {
//                     flag1 = false;
//                     break;
//                 }
//                 left ++
//                 right --
//             }

//             while(left + 1 < right) {
//                 let c3 = s.charAt(left + 1);
//                 let c4 = s.charAt(right);

//                 if (c3 != c4) {
//                     flag2 = false;
//                     break;
//                 }
//                 left ++
//                 right --
//             }

//             return flag1 || flag2
//         }
//     }
//     return true
// };