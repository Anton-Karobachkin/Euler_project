//Problem 35. Circular Primes

const startTime = performance.now();

let limit = 1_000_000;
const primes_storage = new Uint8Array(limit);
let isPrime = (number) => {
    if (primes_storage[number]) return true;

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) { isPrime = false; break; }
    }
    primes_storage[number] = isPrime;
    return isPrime;
}

let how_many_circular_primes = 1;
for (let i = 3; i < limit; i += 2) {

    let number = i;
    let len = 1;
    let mult10 = 10;
    while (mult10 < number) {
        mult10 *= 10;
        len++;
    }
    mult10 /= 10;

    for (var ii = 0; ii < len; ii++) {
        const isNumberPrime = isPrime(number);
        if (!isNumberPrime) break;

        let d = number % 10;
        number = number / 10 | 0;
        number += d * mult10;// 10 ** (len - 1);
    }
    if (ii == len) how_many_circular_primes++;

    // let numArr = [];
    // while (number) {
    //     numArr.push(number % 10);
    //     number = number / 10 | 0;
    // }
    // numArr.reverse();
    // const digitCount = numArr.length;
    // for (let ii = 0; ii <= digitCount - 1; ii++) {
    //     const isCNumbPrime = isPrime(+numArr.slice(ii, ii + digitCount).join(''));
    //     if (isCNumbPrime) numArr.push(numArr[ii]);
    //     else { how_many_circular_primes--; break; }
    // }
    // how_many_circular_primes++;
}

console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(how_many_circular_primes);