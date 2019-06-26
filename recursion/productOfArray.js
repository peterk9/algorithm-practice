function productOfArray(arr) {
    if (arr.length === 0) return 0;
    var i = arr.length - 1;
    return function calcProduct(i) {
        if (i === -1) return 1;
        else return arr[i] * calcProduct(i - 1);
    }(i);
}