//Problem 2. Even Fibonacci Numbers

var startTime = performance.now();

var sum = 0;
var limit = 4_000_000_000_000;

var fib_0 = 2;
var fib_1 = 8;

sum += fib_0;
do {
    sum += fib_1;
    var tmp = fib_0;
    fib_0 = fib_1;
    fib_1 = tmp + 4 * fib_0;
} while (fib_1 < limit);

var endTime = performance.now();

console.log('Sum', sum);
console.log(`Logic took ${endTime - startTime} milliseconds`)