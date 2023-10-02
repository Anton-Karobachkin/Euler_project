//Problem 28. Number Spiral Diagonals

const startTime = performance.now();

const squareSize = 1001;

let sum = 1; // middle point
let cornerValue = 1;
for (let i = 0; i < 500; i++) {
    let stepsToDiagonalPoint = 2 * (i + 1);
    for (let ii = 0; ii < 4; ii++) {
        cornerValue += stepsToDiagonalPoint;
        sum += cornerValue;
    }
}

console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(sum);