//Problem 34. Digit Factorials

const startTime = performance.now();

const factorials = [1];
// let mult = 1;
for (let i = 1; i < 10; i++) {
    // mult *= i;
    // factorials[i] = mult;
    factorials[i] = factorials[i - 1] * i;
}

let sum = 0;
for (let i = 10; i <= 3_000_000; i++) {

    let sum_of_factorials = 0;
    let tmp = i;
    while (tmp) {
        sum_of_factorials += factorials[tmp % 10];
        // if (sum_of_factorials > i) break;
        tmp = tmp / 10 | 0;
    }
    // if (sum_of_factorials == i) console.log(i)
    sum += sum_of_factorials == i ? i : 0;
}

console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(sum);