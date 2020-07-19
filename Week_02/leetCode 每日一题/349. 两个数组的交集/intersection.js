/* ES6 api */
function intersection(nums1, nums2) {
    return [...new Set(nums1.filter((item) => nums2.includes(item)))];
}

/* 排序 + 双指针 */
/* 双指针应用场景 */
function intersection(nums1, nums2) {
    nums1 = nums1.sort((a, b) => a - b)
    nums2 = nums2.sort((a, b) => a - b)

    let i = 0;
    let j = 0;

    let res = new Set()
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++
        } else if (nums1[i] > nums2[j]) {
            j++
        } else {
            res.add(nums1[i]);
            i++;
            j++;
        }
    }

    return [...res];
}

/* 二分查找 */
function intersection(nums1, nums2) {
    let res = new Set();
    nums2 = nums2.sort((a, b) => a - b)
    let binarySearch = (arr, val) => {
        let left = 0;
        let right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);
            if (arr[mid] == val) {
                return true
            } else if (arr[mid] > val) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return false
    }

    for (let i = 0; i < nums1.length; i++) {
        if (binarySearch(nums2, nums1[i])) {
            res.add(nums1[i]);
        }
    }

    return [...res];
}

console.log(intersection([1], [1]));
console.log(intersection([1, 2, 2, 1], [2]));
console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));