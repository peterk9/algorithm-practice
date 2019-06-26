/**
 * write a function called isSubsequence which takes in
 * two strings and checks whether the characters in the
 * first string form a subsequence in the second string.
 * In other words, the function should check wheter the
 * characters in teh first string appear somewhere in
 * the second string without their order changing.
 *
 * 1) understand the problem
 *  create a function called isSubsequence and return
 *  true or false wheter the first string appears as
 *  an unchanged subsequence within the second string
 * 2) list assumptions
 *      assuming that both inputs are strings;
 *      chars of string one found int string two cannot change order
 *      chars of string one as a subsequence of string2 does not have to be consecutive
 *      will only return true or false
 * 3) design test cases
 *    valid:
 *      isSubsequence('hello', 'hello world) // true
 *      isSubsequence('sing','string') // true
 *      isSubsequence('abc','abracadabra') // true
 *    invalid:
 *      isSubsequence('abc','acb') // false out of order
 * 4) break it down
 *    have an index starting at 0 for string 1 and string 2
 *    loop while index1 less than string1.length
 *      if index2 == string2.length return false
 *      if char at string1.index1 == char string2.index2
 *          index1++
 *      index2++
 *    return true;
 * 5) solve
 * 6) refactor
 */

function isSubsequence(string1, string2) {
    if (string1.length === 0) return true;
    let index1 = 0, index2 = 0;
    while (index1 < string1.length) {
        if (index2 === string2.length) return false;
        if (string1[index1] === string2[index2]) index1++;
        index2++;
    }
    return true;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'string')); // true
console.log(isSubsequence('', 'string')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false out of order