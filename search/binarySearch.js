function binarySearch(arr, v) {
    if (arr.length === 0) return -1;
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (arr[middle] === v) return middle;
        if (arr[middle] < v) start = middle + 1;
        if (arr[middle] > v) end = middle - 1;
    }
    return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 19], 5));
