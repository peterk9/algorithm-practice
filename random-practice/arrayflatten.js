/**
 * flatten an array of embedded integer arrays [1,2,[3,[4]]]
 *
 */

const flatten = (arr) => {
    if (arr.length === 0) return [];
    if (arr[0] && arr[0].length > 0) return [].concat(flatten(arr.shift()), flatten(arr));
    else return [].concat(arr.shift(), flatten(arr));
}
console.log(flatten([1, 2, [3, [4], 5, [6, [7], [8, 9, 10, [], 11, [12]]]]]));



// [1,[2]] 

// lance

// const flat = [];

// const flatten = (array) => {
//     array.forEach((curr) => {
//         if (!Array.isArray(curr)) {
//             flat.push(curr)
//         } else {
//             flatten(curr)
//         }
//     })
// };

// flatten([1, 2, [3, [4], 5, [6, [7], [8, 9, 10, [], 11, [12]]]]])

// console.log(flat);
