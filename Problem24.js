//Problem 24. Lexicographic Permutations

const startTime = performance.now();

// i-th permutation
const pointer = 1_000_000;
// count of available symbols for permutation
const symbols = 10;

// calc factor = (symbols-1)!;  Alghoritm starts from defining elder sybmol
let factor = 1;
for (let i = 2; i < symbols; i++) {
    factor *= i;
}
let factorInd = symbols - 1;


let result = '';
// array from 0 to sybmols; Can be any length, can contain any sortable sybmols and can contain repeated sybmols. 
let digits = [...new Array(symbols).keys()];


// The algorithm working like:
// We trying to define elder symbol: 
// If limit <= factor : we need to get lower value from possible options. Index of digits arr is 0
// else we define index : we get whole part and add -1 in case current factor is divisor of limit. If not we just get remainder part
//      limit updated based of rule : if remainer isn't 0 we use it. Else we use current factor
// Based of index that we found, we add elder sybmol to result var and remove this sybmol from available options - digits arr
// Goint to lower factor and decreese factorInd



let limit = pointer;
while (digits.length) {
    let selectedInd;
    if (limit <= factor) {
        selectedInd = 0;
    } else {
        let wPart = Math.floor(limit / factor);
        let rPart = limit % factor;
        selectedInd = wPart - !rPart;
        limit = rPart ? rPart : factor;
    }
    result += digits[selectedInd];
    digits.splice(selectedInd, 1);
    factor /= factorInd;
    factorInd--;
}

console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(result);