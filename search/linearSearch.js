function linearSearch(arr, v) {
    if (arr.length === 0) return -1;
    for (let i = 0; i < arr.length; i++)
        if (arr[i] === v) return i;
    return -1;
}