function reverse(str1, str2 = '') {
    return str1.length > 0 ? reverse(str1.slice(0, str1.length - 1), str2 + str1[str1.length - 1]) : str2.length ? str2 : str1
}

let input1 = "Hello"

console.log(reverse(input1));