
// Print the even numbers in an array.

const evenArr = [10, 3, 4, 2, 78, 9, 8];

for (i = 0; i < evenArr.length; i ++) {
    if (evenArr[i] % 2 == 0) {
        console.log(evenArr[i]);
    }
}

console.log("====================================");
// Print the odd numbers in an array.

const oddArr = [10, 3, 4, 2, 78, 9, 8];

for (i = 0; i < oddArr.length; i = i + 1) {
    if (oddArr[i] % 2 == 1) {
        console.log(oddArr[i]);
    }
}


console.log("====================================");

// While loop practice

let j = 0;
while(j < 5){
    console.log("Hello World");
    j ++;
}