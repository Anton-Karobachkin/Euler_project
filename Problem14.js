//Problem 14. Longest Collatz Sequence

const startTime = performance.now();

let limit = 1_000_000;
let memory = new Array(limit + 1);
memory[1] = 1;
let maxLength = 1;
let maxLengthIndex = 1;

for (let i = 2; i <= limit; i++) { // i = limit/2; We can check only second half, but this is not faster

    //if (i % 2 == 0 && i < limit / 2) continue; // takes more time than save

    let tmp = i;
    let length = 1;
    while (true) {
        // if (tmp >> 1 != tmp >>> 1) console.log(tmp)
        tmp = (tmp & 1) ? (3 * tmp + 1) : tmp / 2; //   tmp&1 faster then tmp%2
        if (tmp < i) { //memory[tmp]  Access to array elem is time consuming
            length += memory[tmp];
            memory[i] = length;
            if (length > maxLength) {
                maxLength = length;
                maxLengthIndex = i;
            }
            break;
        }
        length++;
    }
}

const endTime = performance.now();

console.log(maxLengthIndex)
console.log(`Logic took ${endTime - startTime} milliseconds`);