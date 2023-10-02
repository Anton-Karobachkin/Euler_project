//Problem 6. Sum Square Difference

var startTime = performance.now();

var number = 1_000_000_000;

var sumOfSquares = (2 * number + 1) * (number + 1) * number / 6;
var sum = number * (1 + number) / 2;
var squareOfSum = Math.pow(sum, 2);

var endTime = performance.now();

console.log(squareOfSum - sumOfSquares);
console.log(`Logic took ${endTime - startTime} milliseconds`)