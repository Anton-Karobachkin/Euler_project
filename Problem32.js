//Problem 32. Pandigital Products

const startTime = performance.now();

const uniqueProducts = new Set();

// for (let i = 1; i < 999999; i++) {
//     // const dArr = i.toString().split('');
//     const dArr = [];
//     let tmp = i;
//     while (tmp) {
//         dArr.push(tmp % 10);
//         tmp = Math.floor(tmp / 10);
//     }
// }

for (let i = 1; i <= 9; i++) {
    for (let ii = 1234; ii <= 9876; ii++) {

        const dArr = [];
        let multiplicand = i;
        while (multiplicand) {
            dArr.push(multiplicand % 10);
            multiplicand = Math.trunc(multiplicand / 10);
        }

        let multiplier = ii;
        while (multiplier) {
            dArr.push(multiplier % 10);
            multiplier = Math.trunc(multiplier / 10);
        }

        let product = i * ii;
        while (product) {
            dArr.push(product % 10);
            product = Math.trunc(product / 10);
        }
        const uniqueDigits = new Set(dArr);
        if (!uniqueDigits.has(0) && uniqueDigits.size === 9 && i * ii / 10000 < 1) {
            uniqueProducts.add(i * ii);
        }
    }
}

for (let i = 1; i <= 9; i++) {
    for (let ii = 1; ii <= 9; ii++) {
        if (i === ii) continue;

        const multiplicand = i * 10 + ii;
        for (let iii = 123; iii <= 987; iii++) {
            const multiplier = iii;
            let uniqueDigits = new Set(multiplier.toString() + multiplicand.toString());
            if (uniqueDigits.size < 5) continue;

            const product = multiplicand * multiplier;
            const productDigits = product.toString().split('');
            productDigits.forEach(d => uniqueDigits.add(d));
            if (!uniqueDigits.has('0') && productDigits.length == 4 && uniqueDigits.size === 9) {
                uniqueProducts.add(product);
            }
        }
    }
}

let sum = 0;
uniqueProducts.forEach(p => sum += p);

console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(sum);