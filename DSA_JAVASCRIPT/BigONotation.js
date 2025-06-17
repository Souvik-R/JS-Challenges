// 1. example

// const funnyNumber = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         if (i == 3) return array[i];
//     };
// };

// const funnyNumber = (array) => {
//     return array[3];
// };

// const numbers = [120, 390, 5, 122, 40];

// console.time("funnyNumber")
// console.log(funnyNumber(numbers));
// console.timeEnd("funnyNumber")


// 2. example

// function upDownNumber(n) {
//     console.log("Going forward");
//     for (let i = 0; i <= n; i++) {
//         console.log(i);
//     };
//     console.log("At the end, going back");
//     for (let j = n; j >= 0; j--) {
//         console.log(j);
//     };
//     console.log("End");
// }
// console.log(upDownNumber(2));


// Space complexity

const sumOfArray = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

const array1 = [120, 60, 78, 89];

console.log(sumOfArray(array1));