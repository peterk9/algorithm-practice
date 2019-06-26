/**
 * write a function called sumZero which accepts a sorted
 * array of integers. The function should find the
 * first pair where the sum is 0. Return an array that
 * includes both values that sum to zero or undefined
 * if a pair does not exist.
 *
 * 1) understand the problem
 *    take in a sorted array of integers
 *    return first pair found where the sum of the pair
 *    equates to 0
 *    return array of the pair or undefined
 * 2) explore examples and list assumptions
 *      assumptions:
 *          - sorted array of integers
 *          - not validating if list is sorted / pure integers
 *      examples:
 *          valid:
 *              sumZero([-1,0,1]) => [-1, 1]
 *              sumZero([-2, -1, 0, 1, 2, 5]) => [-2, 2]
 *          invalid:
 *              sumZero([-1,0]) => undefined
 *              sumZero([]) => undefined
 *              sumZero([-2, -2, 0, 1, 3, 5]) => undefined
 * 3) break down approach in components
 *      if arr.length == 0 then return undefined
 *      create two pointers lowestIndex and highestIndex
 *      while lowestindex < highestIndex
 *          if lowestnumber + highestnumber == 0
 *              return pair
 *          else if sum > 0
 *              shift higestIndex to left
 *          else if sum < 0
 *              shift lowestIndext to right
 * 4) solve and simplify
 * 5) go back and refactor
 *
 */

function sumZero(intArr) {
    if (intArr.length === 0) {
        return undefined;
    }

    let lowestIndex = 0;
    let highestIndex = intArr.length - 1;

    while (lowestIndex < highestIndex) {
        let sum = intArr[lowestIndex] + intArr[highestIndex];
        if (sum === 0) {
            return [intArr[lowestIndex], intArr[highestIndex]];
        } else if (sum > 0) {
            highestIndex--;
        } else if (sum < 0) {
            lowestIndex++;
        }
    }

    return undefined;
}

console.log(sumZero([-1, 0, 1])) // [-1, 1]
console.log(sumZero([-2, -1, 0, 1, 2, 5])) // [-2. 2]
console.log(sumZero([-1, 0])) // undefined
console.log(sumZero([])) // undefined
console.log(sumZero([-2, -2, 0, 1, 3, 5])) // undefined
