//Problem 7. 10001 st Prime

var startTime = performance.now();

var limit = 1000001;
var primes = [2, 3];
var primesCount = 2;

for (var i = 5; primesCount < limit; i += 2) {

    if ((i - 1) % 6 && (i + 1) % 6) continue;
    var isIPrime = true;
    for (var j = 0; j < primesCount; j++) {
        if (primes[j] > Math.sqrt(i)) break;
        if (i % primes[j] == 0) {
            isIPrime = false;
            break;
        }
    }

    if (isIPrime) {
        primes.push(i);
        primesCount++;
    }

    // var isIPrime = true;
    // for (var j = 0; j < primesCount; j++) {
    //     if (primes[j] > Math.sqrt(i + 2)) break;
    //     if ((i + 2) % primes[j] == 0) {
    //         isIPrime = false;
    //         break;
    //     }
    // }

    // if (isIPrime) {
    //     primes.push(i + 2);
    //     primesCount++;
    // }
}

var endTime = performance.now();

console.log(primesCount, primes[primesCount - 1]);
console.log(`Logic took ${endTime - startTime} milliseconds`);