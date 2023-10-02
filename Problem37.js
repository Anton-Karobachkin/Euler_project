//Problem 36. Double-base Palindromes

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

let sum = 0;
let foundTruncatablePrimes = 0;
for (let i = 11; foundTruncatablePrimes < 11; i += 2) {

    if (isPrime(i)) {
        let numLen = 1;
        let tmp = i;
        while (tmp = tmp / 10 | 0) {
            numLen++;
        }

        // let primeTruncCount = 0;
        // let rightPowIter = 10;
        // let leftPowIter = Math.pow(10, numLen - 1);
        // for (let ii = 1; ii < numLen; ii++) {
        //     let rightTrunc = i % rightPowIter;
        //     rightPowIter *= 10;
        //     if (isPrime(rightTrunc)) {
        //         let leftTrunc = i / leftPowIter | 0;
        //         leftPowIter /= 10;
        //         if (isPrime(leftTrunc)) {
        //             primeTruncCount++;
        //         } else {
        //             break;
        //         }
        //     } else {
        //         break;
        //     }
        // }
        // if (primeTruncCount == numLen - 1) {
        //     sum += i;
        //     foundTruncatablePrimes++;
        // }

        // This is my first solution

        let tmpNum = i / 10 | 0;
        let iter = 0;
        while (tmpNum && isPrime(tmpNum)) {
            iter++;
            tmpNum = tmpNum / 10 | 0;
        }
        if (iter == numLen - 1) {

            let numPow = Math.pow(10, numLen - 1);
            let tmpNum = i - ((i / numPow | 0) * numPow);
            let iter = 0;
            while (tmpNum && isPrime(tmpNum)) {
                iter++;
                numPow /= 10;
                tmpNum = tmpNum - ((tmpNum / numPow | 0) * numPow);
            }
            if (iter == numLen - 1) {
                sum += i;
                foundTruncatablePrimes++;
            }
        }

    }
}

console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(sum);