function naiveStringSearch(arr, target) {
    if (arr.length == 0 || target.length == 0) return 0;
    if (target.length > arr.length) return -1;
    let count = 0;
    let match;
    for (let i = 0; i < arr.length; i++) {
        match = true;
        for (let j = 0; j < target.length; j++)
            if (arr[j + i] != target[j]) {
                match = false;
                break;
            }
        if (match) count++;
    }
    return count;
}

console.log(naiveStringSearch("hello world hehe", "he"));