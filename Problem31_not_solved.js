//Problem 31. Coin Sums

const startTime = performance.now();

const target = 7;

function solution(target) {
    var coins = [1, 2, 5, 10, 20, 50, 100, 200];
    var table = new Array(target + 1);
    for (var i = 0; i <= target; i++) {
        table[i] = new Array(coins.length);
        table[i][0] = 1;
    }

    for (var i = 0; i <= target; i++) {
        for (var j = 1; j < coins.length; j++) {
            table[i][j] = table[i][j - 1];
            if (coins[j] <= i)
                table[i][j] += table[i - coins[j]][j];
        }
    }
    for (let i = 0; i < table.length; i++) {
        process.stdout.write(' ' + coins[i]);
    }
    console.log()
    console.log(table[-1][0]);
    for (let i = 0; i < table.length; i++) {
        process.stdout.write('' + (i));
        for (let ii = 0; ii < table[i].length; ii++) {
            process.stdout.write('  ' + table[i][ii]);
        }
        console.log()
    }
    return table[i - 1][j - 1];
}


console.log(`Logic took ${performance.now() - startTime} milliseconds`);
console.log(solution(target));