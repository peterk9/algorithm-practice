/**
    write a function called same, which accepts two arrays.
    the function should return true if every value in the arrat has it's corresponding value squared
    in the second array, the frequency of the values must be the same.

    problem solving steps:
        1) understand the problem
            -> take two arrays (1 , 2) and check if each element in array 1 is found in array 2 with it's values squared.
               the order in the second array does not need to match the 1st array
               the frequency of the second array must match the first array
               returns true or false if the above create matches
        2) explore concrete examples
            [1, 2 , 3] => [1, 4, 9] good true
            [1, 2, 2] => [4, 1, 5] good true
            [1, 2, 1] => [1, 4] bad false
            [1, 2, 1] => [4, 4, 1] bad false
        3) break down
            loop through each element in array 1 and save frequency of input squared and store into temp obj
            if tempArray and Array2 match then it is good.
        4) solve / simplify
        5) go back and refactor
*/

const same = (a1, a2) => {

    if (a1.length !== a2.length) {
        return false;
    }

    let squares = {}
    for (let i = 0; i < a1.length; i++) {
        value = a1[i] ** 2;
        squares[value] = (squares[value] || 0) + 1
    }

    for (let j = 0; j < a2.length; j++) {
        value = a2[j];
        if (squares[value] > 0)
            squares[value]--;
    }

    for (let k = 0; k < Object.values(squares).length; k++) {
        if (Object.values(squares)[k] != 0)
            return false;
    }

    return true;
}

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // true
console.log(same([1, 2, 1], [4, 4, 1])); // false
