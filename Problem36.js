//Problem 36. Double-base Palindromes

const startTime = performance.now();

const limit = 1_000_000_000;
let sum = 0;

// const isPalindrome = function (n, base) {
//     let reversed = 0;
//     let copyNum = n;
//     while (copyNum) {
//         reversed = reversed * base + copyNum % base;
//         copyNum = copyNum / base | 0;
//     }
//     return (reversed === n);
// }

// for (let i = 1; i < limit; i += 2) {
//     if (isPalindrome(i, 2) && isPalindrome(i, 10)) sum += i;
// }

const generatePalindrome2 = (num, isOddLength) => {

    let numCopy = num;
    if (isOddLength) numCopy = numCopy >> 1;
    while (numCopy) {
        num = num << 1;
        num += numCopy & 1;
        numCopy = numCopy >> 1;
    }
    return num;
}

const isPalindrome10 = (num) => {
    let reversed = 0;
    let numCopy = num;
    while (numCopy) {
        reversed = reversed * 10 + numCopy % 10;
        numCopy = numCopy / 10 | 0;
    }
    return num === reversed;
}

let i = 1;
let p2 = generatePalindrome2(i, true)
while (p2 < limit) {
    if (isPalindrome10(p2)) sum += p2;
    i++;
    p2 = generatePalindrome2(i, true);
}

i = 1;
p2 = generatePalindrome2(i, false)
while (p2 < limit) {
    if (isPalindrome10(p2)) sum += p2;
    i++;
    p2 = generatePalindrome2(i, false);
}

console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(sum);