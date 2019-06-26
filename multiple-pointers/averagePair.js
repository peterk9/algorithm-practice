/**
 * write a function called averagePair. given a sorted
 * array of integers and a target average. determine if
 * there is a pair of values in the array where the avg
 * of the pair equal the target avg.
 * there may be more than one pair that matches the target.
 *
 * 1) understand the problem
 *    create a function that takes a sorted int array
 *    and a target average.
 *    return true if there is a pair in the array whose
 *    average matches the target average else return false
 * 2) list assumptions
 *    int array can contain + and/or - ints
 *    target average can be + or -
 *    there can be multiple matching pairs but return the first pair
 * 3) design test cases
 *    valid:
 *          averagePair([1,1], 1) // true
 *          averagePair([2,4,6], 5) // true
 *          averagePair([-1,-1,6], -1) // true
 *          averagePair([-22, 7, 8], 7.5) // true
 *    invalid:
 *          averagePair([2,4,6], 3) // false
 *          averagePair([-1,-5,-22], 3.5) // false
 * 4) break it down
 *      if arr.length == 0 return false
 *      low and high,
 *      if low and high avg == temp return true
 *      else if avg > tgt move high to left
 *      else if avg < tgt move low to right
 * 5) solve
 * 6) refactor
 */

function averagePair(arr, targetAvg) {
    if (arr.length === 0) return false;
    let li = 0;
    let hi = arr.length - 1;
    while (li < hi) {
        let tempAvg = (arr[li] + arr[hi]) / 2
        if (tempAvg == targetAvg) return true;
        else if (tempAvg > targetAvg) hi--;
        else li++;
    }
    return false;
}

console.log(averagePair([1, 1], 1)); // true
console.log(averagePair([2, 4, 6], 5)); // true
console.log(averagePair([-1, -1, 6], -1)); // true
console.log(averagePair([-22, 7, 8], 7.5)); // true
console.log(averagePair([2, 5, 6], 3)); // false
console.log(averagePair([-1, -5, -22], 3.5)); // false