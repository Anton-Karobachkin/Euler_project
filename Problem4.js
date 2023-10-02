//Problem 4. Largest Palindrome Product

var startTime = performance.now();

var largestPolindromeNumber = 1;

outer:
for (var i = 99999; i >= 10000; i--) {

    var initJ;
    var stepJ;
    if (i % 11 == 0) {
        initJ = 99999;
        stepJ = 1;
    } else {
        initJ = 99990;//The largest number less than or equal 99999 and divisible by 11; (9+9+0) - (9+9) = 0
        stepJ = 11;
    }

    for (var j = initJ; j >= 10000; j -= stepJ) {

        var mult = i * j;
        if (mult <= largestPolindromeNumber) break;
        var str = "" + mult;
        if (str == str.split("").reverse().join("")) {
            largestPolindromeNumber = mult;
            break;
        }
    }
}

var endTime = performance.now();

console.log(largestPolindromeNumber);
console.log(`Logic took ${endTime - startTime} milliseconds`)