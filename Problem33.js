//Problem 33. Pandigital Products

const startTime = performance.now();

let denominator = 1;
for (let i = 10; i <= 99; i++) {
    for (let ii = 10; ii <= 99; ii++) {
        if (i >= ii) continue;
        if (i % 10 == 0 || ii % 10 == 0) continue;
        if ((i % 10) != (ii / 10 | 0)) continue;
        const fraction = ii / i;
        const fractCase = ii % 10 / (i / 10 | 0);
        if (fraction == fractCase) denominator *= fraction;
    }
}


console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(denominator);