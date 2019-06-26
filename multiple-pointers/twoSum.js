/**
 * Given an array of integers, return indices of the two numbers such that 
 * they add up to a specific target.
   You may assume that each input would have exactly one solution,
   and you may not use the same element twice.
 */

function twoSum(arr, t) {
    if (arr.length === 0) return [];
    let sumCounter = {};
    for (let index in arr) {
        if (sumCounter[arr[index]]) return [Number(sumCounter[arr[index]]), Number(index)]
        else sumCounter[t - arr[index]] = index
    }
    return [];
};

console.log(twoSum([9, 3, 6, -4], -1))

