//Problem 30. Digit Fifth Powers

const startTime = performance.now();

const edge = 355_000;
const pow = 5;
let sum = 0;
for (let i = 2; i <= edge; i++) {
    let num = i;
    let digitsSum = 0;
    while (num) {
        digitsSum += Math.pow(num % 10, pow);
        if (digitsSum > i) break;
        num = Math.floor(num / 10);
    }
    if (i === digitsSum) {
        sum += i;
        // console.log(i);
    }
}


console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(sum);