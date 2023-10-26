//Problem 48. Self Powers

const startTime = performance.now();

let lastNDigit = 10;
let lastNDigitPow = Math.pow(10, lastNDigit);
let thousand = 1001;
let result = 0;
while (--thousand) {

    let pow = 1;
    for (let i = 0; i < thousand; i++) {
        pow *= thousand;
        pow %= lastNDigitPow;
    }
    result += pow;
}

result %= lastNDigitPow;

console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(result);