/**
 * write a function called minSubArrayLen which accepts
 * two parameters; an array of + integers and a + integer
 * the function should return the min length (int) of a
 * contiguous subarray of which the sume is greater then
 * or equal to the integer passed to the function.
 * if tehre isn't one, return 0.
 *
 * 1) understand problem
 *  create a function that accepts an unsorted arr of
 *  + ints and an + int that represents the min sum needed
 *  for a subarray to be returned.
 *  return the length of that subarray
 *  else return 0
 * 2) state assumptions
 *      - array is unsorted
 *      - array contains + integers
 *      - paramter is a + integer
 *      - if array.length = 0 return 0
 * 3) define case tests
 *      valid:
 *          minSubArrayLen([2,3,1,2,4,3], 7) // 2
 *          minSubArrayLen([2,1,6,5,3], 9) // 2
 *          minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1
 *      invalid:
 *          minSubArrayLen([], 2) // 0
 *          minSubArrayLen([1,2], 100) // 0
 * 
 * 4) break it down
 * 5) solve
 * 6) refactor
 *
 */

function minSubArrayLen(arr, t) {
    if (arr.length === 0 || t === 0) return 0;
    arr.sort((a, b) => b - a);
    let tempSum = 0;
    let minLen = 0;
    for (let i = 0; i < arr.length; i++) {
        if (tempSum < t) {
            tempSum += arr[i];
            minLen++;
        } else return minLen;
    }
    return 0;
}

console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)) // 5
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) // 2 2+3+1+2+4 = 8
console.log(minSubArrayLen([2, 1, 6, 5, 3], 9)) // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)) // 1
console.log(minSubArrayLen([], 2)) // 0
console.log(minSubArrayLen([1, 2], 100)) // 0