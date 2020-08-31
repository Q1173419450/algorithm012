/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
/* 计数排序 */
var relativeSortArray = function(arr1, arr2) {
    let arr = new Array(10001).fill(0);
    let ans = [];

    for(let i in arr1 ) {
        // console.log(arr1[i]);
        arr[arr1[i]] += 1;
    }

    for(let i in arr2) {
        // console.log(arr2[i]);
        while(arr[arr2[i]] > 0) {
            ans.push(arr2[i]);
            arr[arr2[i]] -= 1;
        }
    }

    for(let i in arr) {
        while(arr[i] > 0) {
            ans.push(i);
            arr[i] -= 1;
        }
    }

    return ans;
};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))