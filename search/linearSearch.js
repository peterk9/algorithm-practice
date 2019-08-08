function linearSearch(arr, v) {
    if (arr.length === 0) return -1;
    for (let i in arr)
        if (arr[i] === v) return i;
    return -1;
}

console.log(linearSearch([5, 3, 2, 77], 77))