function bubbleSort(arr) {
    if (arr.length == 0 || arr.length == 1) return arr;
    for (let i = arr.length - 1; i > 0; i--) {
        let noSwap = true;
        for (let j = 0; j < i; j++)
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                noSwap = false;
            }
        if (noSwap) break; // noSwap optimizer to prevent unnecessary loops
    }
    return arr;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(bubbleSort([1, 66, 443, 2, 3, 11, 6, 5, 3, 11, 29, 2, 1, 1, 1, 66, 4, 3, 2, 9, 66, 83]))