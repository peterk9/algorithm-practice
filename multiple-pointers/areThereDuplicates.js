/**
 * implement a function called areThereDuplicates which
 * accpets a variable number of arguments, and check
 * wheter there are any duplicates among the arguments
 * passed in. you can solve this using frequency counter
 * pattern or the multiple pointer pattern
 *
 * 1) understand the problem
 *  function take in a variable number of arguments
 *  determine if there are duplicates in an of the arguments
 *  if duplicate found return true, else return false
 * 2) list assumptions
 *  values be integers or characters
 *  values both + and -
 *  3) design examples
 *  cases:
 *      valid:
 *          areThereDuplicates(1,2,3,4,4) // true
 *          areThereDuplicates('a','a',3,4,4) // true
 *          areThereDuplicates('a','c','b', 'b') // true
 *      invalid:
 *          areThereDuplicates(1,2,3,4) // false
 *          areThereDuplicates('a') // false
 *
 * 4) break it down
 *    sort args
 *    sliding window, if last value != current value move next, else return true
 *    finally return false
 * 5) solve
 * 6) refactor
 */

function areThereDuplicates(...args) {
    args.sort();
    let currentValue = args[0];
    for (i = 1; i < args.length; i++) {
        if (currentValue == args[i]) return true;
        else currentValue = args[i]
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3, 4, 4));// true
console.log(areThereDuplicates('a', 'a', 3, 4, 4)); // true
console.log(areThereDuplicates('a', 'c', 'b', 'b')); // true
console.log(areThereDuplicates(1, 2, 3, 4)); // false
console.log(areThereDuplicates('a')); // false