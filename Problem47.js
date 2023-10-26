//Problem 47. Distinct Primes Factors

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
let _nextPrime = (maxPrime) => {

    let found = false;
    let nextPossiblePrime = maxPrime;
    do {
        nextPossiblePrime += 2;
        if (isPrime(nextPossiblePrime)) {
            found = true;
        }
    } while (!found);

    return nextPossiblePrime;
};

const primes = [2, 3];

let consucutive = 4;
let found = false;
let result;
let numIter = 1;
do {
    let countOfPrimeFactors = 0;
    let tmp = numIter;
    let primeIter = 0;
    let prevPossiblePrimeFactor;
    if (isPrime(tmp)) {
        if (numIter - result >= consucutive) {
            found = true;
        } else {
            result = undefined;
        }
        numIter++;
        continue;
    }
    while (tmp != 1) {
        if (primeIter >= primes.length) primes.push(_nextPrime(primes[primes.length - 1]));
        let possiblePrimeFactor = primes[primeIter];
        while (tmp % possiblePrimeFactor == 0) {
            tmp /= possiblePrimeFactor;
            if (possiblePrimeFactor != prevPossiblePrimeFactor) {
                countOfPrimeFactors++;
                prevPossiblePrimeFactor = possiblePrimeFactor;
            }
        }
        primeIter++;
    }
    if (countOfPrimeFactors == consucutive && !result) result = numIter;
    if (countOfPrimeFactors != consucutive) {
        if (numIter - result >= consucutive) {
            found = true;
        } else {
            result = undefined;
        }
    }
    numIter++;
} while (!found);

console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(result);