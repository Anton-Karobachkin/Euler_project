//Problem 25. 1000-digit Fibonacci Number

const startTime = performance.now();

let targetIndex = 2;
let howManyDigits = 1_000;

let fibonacci0 = BigInt(1);
let fibonacci1 = BigInt(1);

while (fibonacci1.toString().length < howManyDigits) {
    fibonacci0 = fibonacci0 + fibonacci1;
    fibonacci1 = fibonacci0 + fibonacci1;
    targetIndex += 2;
}

if (fibonacci0.toString().length >= howManyDigits) {
    targetIndex--;
}

console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(targetIndex);