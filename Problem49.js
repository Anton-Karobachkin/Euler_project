//Problem 49. Prime Permutations

const startTime = performance.now();

let isPrime = (number) => {
    if (number == 1) return false;
    if (number == 2) return true;
    if (number % 2 == 0) return false;

    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i == 0) return false;
    }
    return true;
}

let permutations = [];
let getPermutations = (strStart, symbols) => {
    if (symbols.length == 0) {
        permutations.push(strStart);
    }
    for (let i = 0; i < symbols.length; i++) {
        let restElems = symbols.slice(0, i).concat(symbols.slice(i + 1));
        getPermutations(strStart + symbols[i], restElems);
    }
}

let result = '';
out:
for (let i = 1_000; i < 10_000; i++) {
    if (isPrime(i)) {
        permutations = [];
        getPermutations('', ('' + i).split(''));
        permutations = permutations.filter(el => isPrime(el))
        permutations = [...new Set(permutations)];
        permutations = permutations.map(el => +el);
        permutations.sort();

        for (let j = 0; j < permutations.length; j++) {
            let num1 = permutations[j];
            for (let k = j + 1; k < permutations.length; k++) {
                let num2 = permutations[k];
                for (let s = k + 1; s < permutations.length; s++) {
                    let num3 = permutations[s];

                    if ((num1 + num2 + num3) / 3 == num2 && num1 != 1487) {
                        result += '' + num1 + num2 + num3;
                        break out;
                    }
                }
            }
        }
    }
}

console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(result);