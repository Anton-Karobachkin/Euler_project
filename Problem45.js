//Problem 45. Triangular, Pentagonal, and Hexagonal

const startTime = performance.now();

const _checkIfPentagonal = (number) => {
    let x = (1 + Math.sqrt(1 + 24 * number)) / 6;
    return x == (x | 0);
}

const _checkIfHexagonal = (number) => {
    let x = (1 + Math.sqrt(1 + 8 * number)) / 4;
    return x == (x | 0);
}

let result;
let triangleNum = 40755;
let triangleIdx = 285;
while (!result) {
    triangleNum += ++triangleIdx;
    if (_checkIfPentagonal(triangleNum) && _checkIfHexagonal(triangleNum)) {
        result = triangleNum;
    }
}

console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(result);