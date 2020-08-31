var selectionSort = function(arr) {
    let len = arr.length;
    let minIndex, temp;

    for(let i = 0; i < len - 1; i++) {
        minIndex = i;
        for(let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {   // 寻找最小值
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
}