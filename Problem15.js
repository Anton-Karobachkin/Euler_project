//Problem 15. Lattice Paths

const startTime = performance.now();

let gridDim = 20;
let gridSize = gridDim * gridDim;
let grid = new Array(gridSize);

grid[0] = 0;
for (let i = 1; i < gridSize; i++) {
    if (i < gridDim || i % gridDim == 0) {
        grid[i] = 1
    } else {
        grid[i] = grid[i - 1] + grid[i - gridDim];
    }
}

const endTime = performance.now();

console.log(grid[gridSize - 1]);
console.log(`Logic took ${endTime - startTime} milliseconds`);

const startTime1 = performance.now();
let ways = 1;
for (let i = 1; i <= gridDim; i++) {
    ways *= ((gridDim + i) / i);
}
const endTime1 = performance.now();
console.log(Math.round(ways));
console.log(`Logic took ${endTime1 - startTime1} milliseconds`);
