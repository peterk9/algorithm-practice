/**
 * implement a function called countUniqueValues which
 * accepts a sorted array, and counts the unique values
 * in the array. there can be a negative numbers in the
 * array but it will always be sorted.
 *
 * 1) understand the problem
 *      take in a sorted integer array and count all unique values
 *      in the array.
 *      return 0 if there are no unqiue values => array empty
 *      return integer representing count of unique numbers
 * 2) list assumptions & define concrete example
 *      assumptions:
 *          - array is only integers
 *          - array is sorted from lowest to highest
 *      examples:
 *          valid:
 *              countUniqueValues([1,1,1,1,1,2]) => 2
 *              countUniqueValues([1,2,3,4,4,4,5,6,7,7,7]) => 7
 *              countUniqueValues([-2, -1, -1, 0, 1]) => 4
 *          invalid:
 *              countUniqueValues([]) => 0
 * 3) break it down into components
 *      if array length is 0, return 0
 *    uniqueNumbers starts at 0
 *    singe sliding window. and last value
 *    last == current[0]
 *    if last - current == 0
 * 4) solve & test
 * 5) simplify & refactor
 */

function countUniqueValues(intArr) {
    if (intArr.length === 0) return 0;

    let count = 1;
    let lastUniqueValue = intArr[0];
    for (i in intArr) {
        let currentValue = intArr[i];
        if ((currentValue - lastUniqueValue) !== 0) {
            count++
        }
        lastUniqueValue = currentValue;
    }
    return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 5, 6, 7, 7, 7])); // 7
console.log(countUniqueValues([-2, -1, -1, 0, 1]));// 4
console.log(countUniqueValues([])); // 0