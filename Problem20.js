//Problem 20. Factorial Digit Sum

const startTime = performance.now();

let factorNumber = 100;
let value = 1n;
for (let i = 1; i <= factorNumber; i++) {
    value *= BigInt(i);
}
let valueArr = value.toString().split('');
let sum = 0;
valueArr.forEach((n) => {
    sum += +n;
});

const endTime = performance.now();
console.log(sum);
console.log(`Logic took ${endTime - startTime} milliseconds`);
