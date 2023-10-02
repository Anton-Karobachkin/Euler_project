//Problem 21. Amicable Numbers

const startTime = performance.now();

let limit = 1000000;
let divisorsSumArr = new Array(limit);
divisorsSumArr[0] = divisorsSumArr[1] = 0;
for (let i = 2; i < limit; i++) {

    let divisorsSum = 1;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            divisorsSum += j;
            if (j != i / j) divisorsSum += i / j;
        }
    }
    divisorsSumArr[i] = divisorsSum;
}

let sum = 0;
for (let i = 1; i < limit; i++) {
    if (i == divisorsSumArr[divisorsSumArr[i]] && i != divisorsSumArr[i]) {
        sum += divisorsSumArr[i];
        sum += divisorsSumArr[divisorsSumArr[i]];
    }
}
const endTime = performance.now();
console.log(sum / 2);
console.log(`Logic took ${endTime - startTime} milliseconds`);
