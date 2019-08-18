function stringHash(str, arrayLen) {
    let total = 0
    for (let char of str) {
        total += char.charCodeAt(0) - 96;
    }
    total = (total % arrayLen);
    return total;
}

console.log(stringHash("purple", 10));

// problem with this hash 
// 1) only hashes string
// 2) not constant time O(1), it is based of the size of the input O(n)
// 3) clusters the indices

function hash(key, arrayLen) {
    let total = 0;
    let PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * PRIME + value) % arrayLen;
    }
    return total;
}