//Problem 29. Distinct Powers

const startTime = performance.now();

const squareSize = 1001;

const aStart = 2;
const aEnd = 100;
const bStart = 2;
const bEnd = 100;

let set = new Set();
let distinctCount = (aEnd - aStart + 1) * (bEnd - bStart + 1);
for (let a = aStart; a <= aEnd; a++) {
    for (let b = bStart; b <= bEnd; b++) {
        let powAB = a ** b;
        set.has(powAB) ? distinctCount-- : set.add(powAB);
    }
}

console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(distinctCount);