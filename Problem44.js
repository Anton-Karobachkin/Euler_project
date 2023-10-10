//Problem 44. Pentagon Numbers

const startTime = performance.now();

const _checkIfPentagonal = (number) => {
    let x = (1 + Math.sqrt(1 + 24 * number)) / 6;
    return x == (x | 0);
}

console.log(_checkIfPentagonal(176));

let result;
let pentagonal = [1];
let i = 1;
while (!result) {
    let nextElem = pentagonal[i - 1] + (3 * i + 1);
    pentagonal.push(nextElem);

    for (let j = i - 1; j >= 0; j--) {
        if (_checkIfPentagonal(nextElem - pentagonal[j])) {
            if (_checkIfPentagonal(nextElem + pentagonal[j])) result = nextElem - pentagonal[j];
        }
    }
    i++;
}

console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(result);