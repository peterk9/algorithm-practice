function insertionSort(arr) {
    if (arr.length == 0 || arr.length == 1) return arr;
    for (let i = 1; i < arr.length; i++)
        for (let j = 0; j < i; j++)
            if (arr[i] < arr[j]) swap(arr, i, j)
    return arr;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(insertionSort([5, 4, 1, 6, 2, 3]));