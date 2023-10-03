//Problem 39. Integer Right Triangles


const startTime = performance.now();

// each element has number of solutions for i-th perimeter
// will find max at the end
const result = new Array(1001).fill(0);

for (let a = 1; a < 1000; a++) {
    for (let b = 1; b < 1000 - a; b++) {
        let c = Math.sqrt(a * a + b * b);
        if (c == (c | 0)) {
            let perimeter = a + b + c;
            if (perimeter <= 1000) {
                result[perimeter]++;
            }
        }
    }
}
const res = result.indexOf(Math.max(...result));
console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(res);