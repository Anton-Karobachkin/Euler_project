//Problem 3. Largest Prime Factor

var startTime = performance.now();

var number = 600851475143;
/* var largestPrimeNumber = 1;

for (var i = 3; i < number; i += 2) {
    if (number % i == 0) {
        var isSimple = true;
        largestPrimeNumber = number / i;
        var half = Math.floor(largestPrimeNumber / 2);
        for (var j = 3; j < half; j += 1) {
            if (largestPrimeNumber % j == 0) {
                isSimple = false;
                break;
            }
        }
        if (isSimple) {
            break
        }
    }
} */

var factor = 3
var largestPrimeNumber = 1
var maxFactor = Math.sqrt(number);
while (number > 1 && factor <= maxFactor) {
    if (number % factor == 0) {
        largestPrimeNumber = factor
        number /= factor
        while (number % factor == 0) {
            number /= factor
        }
        maxFactor = Math.sqrt(number);
    }
    factor = factor + 2
}

largestPrimeNumber = number == 1 ? largestPrimeNumber : number;


var endTime = performance.now();

console.log(largestPrimeNumber);
console.log(`Logic took ${endTime - startTime} milliseconds`)