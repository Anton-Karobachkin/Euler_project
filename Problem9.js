//Problem 9. Special Pythagorean Triplet

var startTime = performance.now();

// a*a + b*b = c*c
// a + b + c = 1000
// a < b < c

var sum = 1000;
var number;
for (var i = 0; i < Math.floor((sum - 3) / 3); i++) {
    for (var j = i + 1; j < Math.floor((sum - i) / 2); j++) {
        var k = sum - i - j;
        if (i * i + j * j == k * k) {
            number = i * j * k;
            break;
        }
    }
}

var endTime = performance.now();

console.log(number);
console.log(`Logic took ${endTime - startTime} milliseconds`);