/**
 * given two strings, write a function to determine if the second string
 * is an anagram of the first. An anagram is a word, phrase or name formed
 * by rearranging the letters of another, such as cinema from iceman.
 * 
 * 1) understand the problem
 *  take in two strings and return true or false if the second string is an 
 *  anagram of the first string
 * 2) explore examples
 *  isAnagram('','') => true
 *  isAnagram('aaz','azz') => false
 *  isAnagram('cinema', 'iceman') => true
 *  isAnagram('cinea', 'iceman') => false
 *  list assumptions:
 *      - Include capital cases -> no capitals
 *      - alphanumeric? => yes
 *      - whitespaces? => no
 * 3) break it down
 *      1) check if string length the same, else return false
 *      2) loop through first and count instance of letter
 *      3) loop through second and if the letter count matches return true
 * 4) solve & simplify
 * 5) refactor
 */

function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    let charCounter1 = {};
    let charCounter2 = {};

    for (let charIndex in first) {
        let char1 = first[charIndex];
        let char2 = second[charIndex];
        charCounter1[char1] ? charCounter1[char1] += 1 : charCounter1[char1] = 1
        charCounter2[char2] ? charCounter2[char2] += 1 : charCounter2[char2] = 1
    }

    for (key of Object.keys(charCounter2)) {
        if (charCounter1[key] !== charCounter2[key]) {
            return false;
        }
    }

    return true;
}

console.log(validAnagram('hello', 'world')); // false
console.log(validAnagram('aaz', 'azz')); // false
console.log(validAnagram('cinema', 'iceman')); // true
console.log(validAnagram('', '')); // true
console.log(validAnagram('cinea', 'iceman')); // false
console.log(validAnagram('apple', 'paple')); // true