//Problem 46. Goldbach's Other Conjecture

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

let _nextDoubleSquare = (squaresIterator) => { return 2 * squaresIterator * squaresIterator };

const primes = new Set();
primes.add(2, 3);
let maxPrime = 3;

const doubleSquares = [2];
let squaresIterator = 1;

let nextNumberToCheck = 33;

let smallestOddFound = false;
do {
    nextNumberToCheck += 2;
    if (nextNumberToCheck % 1000000 == 1) console.log(nextNumberToCheck)
    while (nextNumberToCheck > maxPrime) {
        let nextPrime = _nextPrime(maxPrime);
        primes.add(nextPrime);
        maxPrime = nextPrime;
    }
    // console.log(primes);

    while (nextNumberToCheck > doubleSquares[doubleSquares.length - 1]) {
        let nextDoubleSquare = _nextDoubleSquare(++squaresIterator);
        doubleSquares.push(nextDoubleSquare);
    }
    // console.log(doubleSquares)

    if (isPrime(nextNumberToCheck)) continue;

    let canBePresentedAsSumOfPrimeAndDoubledSquare = false;
    for (let i = 0; i < doubleSquares.length; i++) {
        if (primes.has(nextNumberToCheck - doubleSquares[i])) {
            canBePresentedAsSumOfPrimeAndDoubledSquare = true;
            break;
        }
    }

    if (!canBePresentedAsSumOfPrimeAndDoubledSquare) smallestOddFound = true;
} while (!smallestOddFound);


console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(nextNumberToCheck);