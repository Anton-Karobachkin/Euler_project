//Problem 11. Highly Divisible Triangular Number

let startTime = performance.now();

let nFirstTriangleNumber;
let nDivisorsCount = 1000;
let getNextPrimeTime = 0;
let getNextPrime = (startPrime) => {
    if (!startPrime) return 2;
    if (startPrime == 2) return 3;
    for (var i = startPrime + 2; ; i += 2) {
        for (var j = 3; j < Math.sqrt(i); j += 2) {
            if (i % j == 0) continue;
        }
        return i;
    }
}

let primesList = [];
let checkNumber

for (var j = 1; ; j++) {

    checkNumber = j * (j + 1) / 2;
    let checkNumbers = [];

    if (j % 2 == 0) {
        checkNumbers.push(j / 2);
        checkNumbers.push(j + 1);
    } else {
        checkNumbers.push((j + 1) / 2);
        checkNumbers.push(j);
    }

    let divisors = 1;
    for (let i = 0; i < 2; i++) {
        let checkNumberTmp = checkNumbers[i];

        let nextPrime;
        let nextPrimeInd = -1;
        while (checkNumberTmp != 1) {
            nextPrimeInd++;
            if (!primesList[nextPrimeInd]) primesList[nextPrimeInd] = getNextPrime(primesList[nextPrimeInd - 1]);
            nextPrime = primesList[nextPrimeInd];//getNextPrime(nextPrime);
            let degree = 0;
            while (checkNumberTmp % nextPrime == 0) {
                degree++;
                checkNumberTmp /= nextPrime;
            }
            divisors *= (degree + 1);
        }
    }
    if (divisors > nDivisorsCount) {
        nFirstTriangleNumber = checkNumber;
        break;
    }
}

// let checkNumber = 0;
// for (var j = 1; !nFirstTriangleNumber; j++) {
//     checkNumber += j;

//     let checkNumberTmp = checkNumber;

//     let divisors = 1;
//     let nextPrime;
//     while (checkNumberTmp != 1) {
//         nextPrime = getNextPrime(nextPrime);
//         let degree = 0;
//         while (checkNumberTmp % nextPrime == 0) {
//             degree++;
//             checkNumberTmp /= nextPrime;
//         }
//         divisors *= (degree + 1);
//     }

//     if (divisors > nDivisorsCount) {
//         nFirstTriangleNumber = checkNumber;
//         break;
//     }

// if (checkNumber < nDivisorsCount) continue;

// let countOfDivisors = 0;
// for (var i = 1; i <= Math.sqrt(checkNumber); i++) {
//     if (checkNumber % i == 0) {
//         countOfDivisors += checkNumber / i == i ? 1 : 2;
//     }
// };
// if (countOfDivisors > nDivisorsCount) {
//     nFirstTriangleNumber = checkNumber;
//     break;
// }
// }

let endTime = performance.now();

console.log(nFirstTriangleNumber);
console.log(`Logic took ${endTime - startTime} milliseconds`);