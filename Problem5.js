//Problem 5. Smallest Multiple

var startTime = performance.now();

var number = 27;
var primeMultiple = 2;
for (var i = 3; i <= number; i += 2) {

    var isPrime = true;
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        primeMultiple *= i;
    }
}

var nok = primeMultiple;
var found = false;

while (!found) {
    var allGood = true;
    for (var i = number; i > 1; i--) {
        if (nok % i) {
            allGood = false;
            break;
        }
    }
    allGood ? found = true : nok += primeMultiple;
}


var endTime = performance.now();

console.log(nok);
console.log(`Logic took ${endTime - startTime} milliseconds`)