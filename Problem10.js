//Problem 10. Summation of Primes

var startTime = performance.now();

// let limit = 5_000_000;

// let sum = 5;
// let isPrime = (num) => {
//     let isPrime = true;
//     for (let j = 3; j <= Math.sqrt(num); j += 2) {
//         if (num % j == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     return isPrime;
// };
// for (let i = 1; 6 * i + 1 < limit; i++) {
//     let num1 = 6 * i - 1;
//     isPrime(num1) ? sum += num1 : null;
//     let num2 = 6 * i + 1;
//     isPrime(num2) ? sum += num2 : null;
// }

// let limit = 5_000_000;
// let sum = 0;
// let field = new Array(limit);

// for (var i = 4; i <= limit; i += 2) {
//     field[i] = true;
// }

// for (var i = 3; i <= Math.sqrt(limit); i += 2) {
//     if (!field[i]) { // this is prime;
//         for (var j = i * i; j <= limit; j += 2 * i) {
//             field[j] = true;
//         }
//     }
// }

// for (var i = 2; i <= limit; i++) {
//     !field[i] ? sum += i : null;
// }

let limit = 5_000_000;
let fieldLimit = Math.floor((limit - 1) / 2);
let field = new Array(fieldLimit); // count of odd numbers. Except 1.

for (var i = 1; i < (Math.sqrt(limit) - 1) / 2; i++) {
    // 2*i+1
    if (!field[i]) { // this is prime;
        for (var j = 2 * i * (i + 1); j <= fieldLimit; j += (2 * i + 1)) {
            field[j] = true;
        }
    }
}

var sum = 2;
for (var i = 1; i <= fieldLimit; i++) {
    !field[i] ? sum += (2 * i + 1) : null;
}
var endTime = performance.now();

console.log(sum);
console.log(`Logic took ${endTime - startTime} milliseconds`);