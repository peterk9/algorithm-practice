function isPalindrome(str) {
    if (str.length <= 1) return true;
    return function checkChar(li, hi, str) {
        if (hi < li) return true;
        if (str[li] === str[hi]) return true && checkChar(++li, --hi, str);
        else return false;
    }(0, str.length - 1, str)
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false