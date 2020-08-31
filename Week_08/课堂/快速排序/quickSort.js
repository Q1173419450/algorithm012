var quickSort = function(arr, left, right) {
    let len = arr.length, partitionIndex;
    let left = typeof left != 'number' ? 0 : left;
    let right = typeof right != 'number' ? length - 1 : right;

    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
}