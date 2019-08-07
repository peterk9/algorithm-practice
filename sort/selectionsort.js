function selectionSort(arr) {
    if (arr.length == 0 || arr.length == 1) return arr;
    let lowest;
    for (let i = 0; i < arr.length; i++) {
        lowest = i;
        for (let j = i + 1; j < arr.length; j++)
            if (arr[j] < arr[lowest]) lowest = j;
        if (i != lowest) swap(arr, i, lowest); // if/else is the optimizer
    }
    return arr;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(selectionSort([5, 3, 1, 2, 1]))
