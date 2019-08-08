function mergesort(arr) {
    if (arr.length == 0 || arr.length == 1) return arr;
    let half = Math.floor(arr.length / 2);
    let start = mergesort(arr.slice(0, half));
    let end = mergesort(arr.slice(half));
    return merge(start, end);
}

function merge(arr1, arr2) {
    let merged = [];
    let count1 = 0;
    let count2 = 0;

    while (count1 < arr1.length && count2 < arr2.length) {
        if (arr1[count1] < arr2[count2]) { // note < counts that >= (equality) is covered by else 
            merged.push(arr1[count1])
            count1++
        } else {
            merged.push(arr2[count2])
            count2++
        }
    }

    while (count1 < arr1.length) {
        merged.push(arr1[count1])
        count1++
    }

    while (count2 < arr2.length) {
        merged.push(arr2[count2])
        count2++
    }

    return merged;
}

//console.log(merge([1, 10, 50], [2, 14, 99, 100]))
let results = mergesort([1, 10, 22, 50, 2, 14, 99, 100])
console.log(results)