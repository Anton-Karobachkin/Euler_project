//Problem 41. Pandigital Prime

const startTime = performance.now();

let isPrime = (number) => {
    if (number == 1) return false;
    if (number == 2) return true;
    if (number % 2 == 0) return false;

    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i == 0) return false;
    }
    return true;
}

// let isPandigital = (number) => {
//     let digits = [];
//     while (number) {
//         digits.push(number % 10);
//         number = number / 10 | 0;
//     }
//     let tmpSet = new Set(digits);
//     if (tmpSet.size != digits.length) return false;
//     if (tmpSet.has(0)) return false;

//     return true;
// }

let result;

// Narayana algorithm. Descending
let nextPermutation = (currentPermutation) => {
    let length = currentPermutation.length;
    let ii, jj;
    for (let i = length - 2; i >= 0; i--) {
        if (currentPermutation[i] > currentPermutation[i + 1]) {
            ii = i;
            break;
        }
    }
    if (ii == -1) return currentPermutation;
    for (let i = length - 1; i >= 0; i--) {
        if (currentPermutation[i] < currentPermutation[ii]) {
            jj = i;
            break;
        }
    }
    let iSymb = currentPermutation[ii];
    currentPermutation[ii] = currentPermutation[jj];
    currentPermutation[jj] = iSymb;

    return currentPermutation.slice(0, ii + 1).concat(currentPermutation.slice(ii + 1).reverse());
}

// there is no prime 1,2,3,,5,6,,8,9 -digital primes.
// check 7. If there is no such number, check 4
let initPerm = new Array(7).fill(0).map((el, i) => i + 1);
initPerm.reverse();

do {
    let number = +initPerm.join('');
    if (isPrime(number)) {
        result = number;
    } else {
        initPerm = nextPermutation(initPerm);
    }
} while (!result);

console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(result);