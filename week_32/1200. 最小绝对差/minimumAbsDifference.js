/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    arr = arr.sort((a, b) => a - b);
    let ans = [];
    let min = Infinity;
    let left = 0;
    let right = 1;
    while (right < arr.length) {
        let temp = arr[right] - arr[left];
        if (temp < min) {
            ans = [];
            min = temp;
            ans.push([arr[left], arr[right]]);
        } else if (temp == min) {
            ans.push([arr[left], arr[right]]);
        }
        left++;
        right++;
    }

    return ans
};