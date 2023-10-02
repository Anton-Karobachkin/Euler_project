//Problem 38. Pandigital Multiples

// if n = 9 then num = 1 => 123456789 - minimum possible pandigital
// n != ( 8 || 7) - impossible to get pandigital
// if n = 6 then num = 3 and sum = 369121518 - isn't pandigital

// if n = 5 then 5 <= num < 10 - need to test
// if n = 4 then 10 <= num <= 33 - need to test
// if n = 3 then 100 <= num < 1000 - need to test
// if n = 2 then 5000 <= num < 10000 - need to test
// test all options and select maximum

const startTime = performance.now();

let maxPandigital = 123456789; // n = 9

let options = [
    {
        n: 5,
        numMin: 5,
        numMax: 10
    },
    {
        n: 4,
        numMin: 25,
        numMax: 34
    },
    {
        n: 3,
        numMin: 100,
        numMax: 333
    },
    {
        n: 2,
        numMin: 5000,
        numMax: 10000
    },
];

options.forEach((option) => {
    for (let num = option.numMin; num < option.numMax; num++) {

        let sum = ''; // working with string, but it isn't fastest way
        for (let i = 1; i <= option.n; i++) {
            sum += num * i;
        }
        let tmp = new Set(sum);
        tmp.delete('0');
        if (tmp.size == 9) maxPandigital = +sum > maxPandigital ? +sum : maxPandigital;
    }
});

console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(maxPandigital);