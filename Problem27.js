//Problem 27. Quadratic Primes

const startTime = performance.now();

let foundPrimaries = new Set();
const _isPrimary = function (number) {

    if (foundPrimaries.has(number)) return true;

    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) return false;
    }

    foundPrimaries.add(number);
    return true;
}

const _checkPrimaryLength = function (a, b) {
    // n*n + a*n + b - we use this formula
    let len = 0;
    while (_isPrimary(len * len + a * len + b)) {
        len++;
    }
    return len;
}

const aLimit = 999;
const bLimit = 1000;

let abProduct;
let maxLen = 0;
for (let a = -1 * aLimit; a <= aLimit; a++) {
    for (let b = 2; b <= bLimit; b += 2) { // n*n+a*n+b should be >= 0  ==> b>=2
        if (b == 2) { b--; }
        else if (a % 2 == 0) {// for n=1, a should be odd, because b is odd and 1+a+b should be odd
            continue;
        }
        let len = _checkPrimaryLength(a, b);
        if (len >= maxLen) {
            abProduct = a * b;
            maxLen = len;
        }
    }
}

console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(maxLen, abProduct);