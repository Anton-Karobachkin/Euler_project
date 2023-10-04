//Problem 40. Champernowne's Constant

const startTime = performance.now();

let iterator = 1;
let numLength = 1;
let result = [1];
let indexToFind = 10;
let limit = 1_000_000;

while (numLength < limit) {
    iterator++;
    let iStr = iterator.toString();
    if (numLength + iStr.length >= indexToFind) {
        let requiredDigit = iStr.charAt(indexToFind - 1 - numLength);
        result.push(+requiredDigit);
        indexToFind *= 10;
    }
    numLength += iStr.length;
}

const res = result.reduce((res, d) => { return res * d }, 1);
console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(res);