function bubbleSort(arr) {
    if (arr.length == 0 || arr.length == 1) return arr;
    let noSwap = true;

    function swap(arr, index1, index2) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
    return arr;
}


console.log(bubbleSort([1, 66, 443, 2, 3, 11, 6, 5, 3, 11, 29, 2, 1, 1, 1, 66, 4, 3, 2, 9, 66, 83]))