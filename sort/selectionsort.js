function selectionSort(arr) {
    if (arr.length == 0 || arr.length == 1) return arr;
    let smallestIndex;
    for (let i = 0; i < arr.length; i++) {
        smallestIndex = i;
        for (let j = i + 1; j < arr.length; j++)
            if (arr[j] < arr[smallestIndex]) smallestIndex = j;
        swap(arr, i, smallestIndex);
    }
    return arr;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(selectionSort([5, 3, 1, 2, 1]))
