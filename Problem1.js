//Problem 1. Find the sum of all the multiples of 3 or 5 below 1000

var startTime = performance.now();

var topLimit = 1_000_000_000;
var sum = 0;

for (var i = 0; i < topLimit; i++) {
    sum += !(i % 3 && i % 5) ? i : 0;
}

var endTime = performance.now();

console.log(sum)
console.log(`Logic took ${endTime - startTime} milliseconds`)

var startTime = performance.now();

var SumDivisibleBy = function (n) {
    p = Math.floor((topLimit - 1) / n);
    return n * (p * (p + 1)) / 2;
}

sum = SumDivisibleBy(3) + SumDivisibleBy(5) - SumDivisibleBy(15)

var endTime = performance.now();

console.log(sum)
console.log(`Logic took ${endTime - startTime} milliseconds`)