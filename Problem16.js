//Problem 16. Power Digit Sum

const startTime = performance.now();

let finalPow = 10000;
let startPow = 0;
let start = 2 ** startPow;

let sum = start.toString();
for (let i = 0; i < finalPow - startPow; i++) {

    let memory = 0;
    let newSum = "";
    for (var j = sum.length - 1; j >= 0; j--) {
        newSum = (+sum[j] + +sum[j] + memory) % 10 + newSum;
        memory = sum[j] >= 5 ? 1 : 0;
    }
    sum = memory ? memory + newSum : newSum;
}

let sumOfDigits = 0;
// for (let i = 0; i < sum.length; i++) {
//     sumOfDigits += +sum[i];
// }
let arr = sum.split('');
sumOfDigits = arr.reduce((acc, cur) => { return +acc + +cur }, 0); // same performance
const endTime = performance.now();
console.log(sumOfDigits);
console.log(`Logic took ${endTime - startTime} milliseconds`);
