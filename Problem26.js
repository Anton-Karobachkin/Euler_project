//Problem 26. Reciprocal Cycles

const startTime = performance.now();

// console.log(1n / 7n)
let limit = 1000;
let longestDecDevider = 0;
let longestCycle = 0;
for (let i = limit - 1; i >= 2; i--) {

    let rest = 10;
    let rests = [];
    while (rest) {

        rests.push(rest);
        rest = rest % i;
        rest *= 10;
        if (!rest) break;
        for (let ii = rests.length - 1; ii >= 0; ii--) {
            if (rests[ii] == rest) {
                // we have save rest. It means we found loop
                let len = rests.length - ii;
                if (len > longestCycle) {
                    longestCycle = len;
                    longestDecDevider = i;
                }
                rest = 0;
                break;
            }
        }
    }
}


console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(longestCycle, longestDecDevider);