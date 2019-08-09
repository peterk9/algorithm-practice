function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIdx = pivotHelper(arr, left, right);
        quickSort(arr, left, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, right)
    }
    return arr;
}

function pivotHelper(arr, start = 0, end = arr.length + 1) {
    let pivot = arr[start];
    let swapIdx = start
    for (i = start + 1; i < end; i++)
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, i, swapIdx)
        }
    swap(arr, start, swapIdx);
    return swapIdx;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]))