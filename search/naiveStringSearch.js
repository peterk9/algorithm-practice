function naiveStringSearch(long, short) {
    let currentIndex = 0;
    for (let i = 0; i < long.length() - 1; i++) {
        if (i <= short.length() - 1 && long[i] == short[i]) currentIndex++;
    }
}

naiveStringSearch("hello world hehe", "he");