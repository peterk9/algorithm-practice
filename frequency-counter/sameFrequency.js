/** write a function called sameFrequency. Given two
 * positive integers, find out if the two numbers have
 * the same frequency of digits.
 *
 * must be O(n) time.
 *
 * 1) understand the problem
 *    given two integers, count the frequency of each digit in each integer
 *    return true or false if their frequencies are the same
 * 2) list assumptions and design concrete cases.
 *    assumptions:
 *      integers can be negative or positive
 *    valid cases:
 *      sameFrequency(112,211) => true
 *      sameFrequency(12888823, 81828283) => true
 *      sameFrequency(-555555, 555555) => true
 *     invalid cases:
 *      sameFrequency(112,221) => false not same freq
 *      sameFrequency(1122,221) => false not same size
 *  3) break it down
 *     if(s1.length !== s2.length) return false;
 *     create digit freq counter for each number
 *     loop through num1 and count frequency
 *     loop through num2 and count frequency
 *     loop through each key in freqcounter2
 *      if key does match return false, if value matches the compare value, if value does not match return false, finally return true
 *  4) solve
 *  5) refactor
 */

function sameFrequency(a, b) {
    let s1 = `${Math.abs(a)}`, s2 = `${Math.abs(b)}`;
    if (s1.length !== s2.length) return false;

    let freqCounter1 = {};
    let freqCounter2 = {};

    for (let i in s1) {
        let digit1 = s1[i]
        let digit2 = s2[i];
        freqCounter1[digit1] ? freqCounter1[digit1] += 1 : freqCounter1[digit1] = 1;
        freqCounter2[digit2] ? freqCounter2[digit2] += 1 : freqCounter2[digit2] = 1;
    }

    for (let key of Object.keys(freqCounter2)) {
        if (freqCounter1[key] !== freqCounter2[key]) {
            return false;
        }
    }

    return true;
}

console.log(sameFrequency(112, 211)) //=> true
console.log(sameFrequency(12888823, 81828283)) //=> true
console.log(sameFrequency(-555555, 555555)) // => true
console.log(sameFrequency(112, 221)) //=> false not same freq
console.log(sameFrequency(1122, 221)) //=> false not same size