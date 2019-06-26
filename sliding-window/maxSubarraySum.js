/**
 * write a function called maxSubarraySum which
 * accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n
 * consecutive elements in the array.
 *
 * 1) understand the problem
 *    create a function that takes in two parameters,
 *    an array of integers and an integer n. the function
 *    should use n to determine the largets consecutive sum
 *    of integers in array.
 *    it returns the max sum as an int
 * 2) state assumptions & define concrete examples
 *    assuming that the array is only integers positive and negative
 *    assuming that the array is not sorted
 *    assuming n is an integer greater than 0.
 *    if arr.length is less than num return null
 *    if n is not greater than zero and if the array is empty
 *    we return null.
 *    examples:
 *      valid:
 *          maxSubarraySum([1,1,1,1], 2) => 2
 *          maxSubarraySum([10,-2,4,5,3,2,1], 4) => 17
 *          maxSubarraySum([10,-2,4,5,3,2,22], 3) => 27
 *      invalid:
 *          maxSubarraySum([0], 3) => null
 *          maxSubarraySum([0], -1) => null
 *          maxSubarraySum([0,2,3], 19) => null
 * 3) break it down into parts
 *    loop through first subarray from index 0 to n
 *    save that value in tempSum (window) and maxSum
 *    slide temp some in loop by adding next element and subrtracting first element from for loop index
 *    return maxSum
 * 4) solve
 * 5) refactor
 */

function maxSubarraySum(arr, n) {
    if (arr.length <= 0 || n <= 0 || arr.length < n) return null;
    let tempSum = 0;
    let maxSum = 0;
    for (i = 0; i < n; i++) {
        tempSum += arr[i];
    }
    maxSum = tempSum;
    for (i = 0; i < arr.length - n; i++) {
        tempSum = tempSum - arr[i] + arr[n + i]
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([1, 1, 1, 1], 2)); // 2
console.log(maxSubarraySum([10, -2, 4, 5, 3, 2, 1], 4)); // 17
console.log(maxSubarraySum([10, -2, 4, 5, 3, 2, 22], 3)); // 27
console.log(maxSubarraySum([], 3)); // null
console.log(maxSubarraySum([1, 2], -1)); // null
console.log(maxSubarraySum([0, 2, 3], 19));// null



