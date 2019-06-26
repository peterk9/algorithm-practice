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
 *  if arguments 1 or less return false
 *  loop through each value in arguments if does not exist add 1
 *  if value not in counter then add it
 *  if value in counter return true
 *  else return false
 *
 * 5) solve
 * 6) refactor
 */

function areThereDuplicates(...args) {
    if (args.length <= 1) return false;
    let dupCounter = {};
    for (let v of args) {
        if (dupCounter[v]) return true;
        else dupCounter[v] = 1;
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3, 4, 4));// true
console.log(areThereDuplicates('a', 'a', 3, 4, 4)); // true
console.log(areThereDuplicates('a', 'c', 'b', 'b')); // true
console.log(areThereDuplicates(1, 2, 3, 4)); // false
console.log(areThereDuplicates('a')); // false