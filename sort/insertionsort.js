function insertionSort(arr) {
    if (arr.length == 0 || arr.length == 1) return arr;
    for (let i = 1; i < arr.length; i++) {
        let noSwap = true;
        for (let j = 0; j < i; j++)
            if (arr[i] < arr[j]) {
                swap(arr, i, j)
                noSwap = false;
            }
        if (noSwap) break; // optimizer
    }
    return arr;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(insertionSort([6, 1, -4, 2, 6, 5, 3]));