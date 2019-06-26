function flatten(arr) {
    if (arr.length === 0) return [];
    let flattened = [];
    function flattenArray(arr, flattened) {
        if (arr[0] != undefined && arr[0].length != 0) {
            flattened.push(arr[0]);
        } else if (arr[0].length > 0) {
            flattenArray(arr[0].slice(1), flattened);
        } else {
            flattenArray(arr.slice(1), flattened)
        }
    }
    flattenArray(arr, flattened);
    return flattened;
}

let arr = [[], 1]

console.log(arr[0] != undefined && arr[0].length != undefined)