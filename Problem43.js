//Problem 43. Sub-string Divisibility

const startTime = performance.now();

// Narayana algorithm. Ascending
let nextPermutation = (currentPermutation) => {

    if (!currentPermutation || !currentPermutation.length) return new Array(10).fill(0).map((el, i) => i);
    let permutation = [...currentPermutation];
    let length = permutation.length;
    let ii, jj;
    for (let i = length - 2; i >= 0; i--) {
        if (permutation[i] < permutation[i + 1]) {
            ii = i;
            break;
        }
    }
    if (ii == -1) return permutation;
    for (let i = length - 1; i >= 0; i--) {
        if (permutation[i] > permutation[ii]) {
            jj = i;
            break;
        }
    }

    [permutation[ii], permutation[jj]] = [permutation[jj], permutation[ii]];

    let res = permutation.slice(0, ii + 1).concat(permutation.slice(ii + 1).reverse());

    return res;
}

let sum = 0;
let primes7 = [2, 3, 5, 7, 11, 13, 17];
let currentPermutation = [];
let permutationsCount = 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10;
for (let i = 0; i < permutationsCount; i++) {
    currentPermutation = nextPermutation(currentPermutation);

    let isFollowing = true;
    for (let j = 0; j < primes7.length; j++) {
        let num = currentPermutation[j + 1] * 100 + currentPermutation[j + 2] * 10 + currentPermutation[j + 3];
        if (num % primes7[j]) {
            isFollowing = false;
            break;
        }
    }
    sum += isFollowing ? +currentPermutation.join('') : 0;
}

console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(sum);