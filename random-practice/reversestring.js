function reverseString(str) {
    if (str.length == 0 || str.length == 1) return str;
    start = 0;
    end = str.length - 1;
    let strArr = str.split('');
    while (start < end) {
        let temp = strArr[start];
        strArr[start] = strArr[end];
        strArr[end] = temp;
        start++;
        end--;
    }
    return strArr.join('');
}

console.log(reverseString("skeeG rof skeeG"))


///// impl 1

function ReverseString(str) {

    // Check input 
    if (!str || str.length < 2 ||
        typeof str !== 'string') {
        return 'Not valid';
    }

    // Take empty array revArray 
    const revArray = [];
    const length = str.length - 1;

    // Looping from the end 
    for (let i = length; i >= 0; i--) {
        revArray.push(str[i]);
    }

    // Joining the array elements 
    return revArray.join('');
}


// imple 2 

function ReverseString2(str) {
    return str.split('').reverse().join('')
}

// imple 3


function ReverseString3(str) {
    return [...str].reverse().join('')
}