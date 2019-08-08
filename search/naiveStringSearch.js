function naiveStringSearch(str, target) {
    if (str.length == 0 || target.length == 0) return 0;
    if (target.length > str.length) return -1;
    let count = 0;
    for (let i = 0; i <= str.length - target.length; i++) {
        let j;
        for (j = 0; j < target.length; j++)
            if (str[j + i] != target[j]) break;
        if (j == target.length) count++;
    }
    return count;
}

console.log(naiveStringSearch("hello world hehe", "he"));