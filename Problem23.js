//Problem 23. Non-Abundant Sums

const startTime = performance.now();

let limit = 28123;

// let abundants = [];
let abundants = new Set();
let abundantsArr = []
for (let i = 1; i <= limit; i++) {

    let divisorsSum = 1;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            divisorsSum += j;
            if (j != i / j) divisorsSum += i / j;
        }
    }
    // if (i < divisorsSum) abundants.push(i);
    if (i < divisorsSum) {
        abundants.add(i);
        abundantsArr.push(i);
    }
}
// let abundantsArr = [...abundants];
let sum = 0;
for (let i = 1; i <= limit; i++) {
    let cannotBeWrittenAsSum = true;
    for (let ii = 0; ii < abundantsArr.length; ii++) {
        // num - abund1; find diff in set
        let dif = i - abundantsArr[ii];
        if (dif < 0) break;
        if (abundants.has(dif)) {
            cannotBeWrittenAsSum = false;
            break;
        }
    }
    if (cannotBeWrittenAsSum) sum += i;
}

console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(sum);


