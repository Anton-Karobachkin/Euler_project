//Problem 19. Counting Sundays

const startTime = performance.now();

let initDate = new Date(1900, 0, 1);
initDate.setDate(initDate.getDate() + 6);
let sundaysIn20 = 0;

while (initDate < new Date(2000, 11, 31)) {
    if (initDate.getDay() == 0 && initDate.getDate() == 1 && initDate.getFullYear() >= 1901) { // this is sunday 1st
        sundaysIn20++;
        // console.log(initDate.getFullYear(), initDate.getMonth(), initDate.getDate(), initDate.getDay())
    }
    initDate.setDate(initDate.getDate() + 7);
}
const endTime = performance.now();
console.log(sundaysIn20);
console.log(`Logic took ${endTime - startTime} milliseconds`);
