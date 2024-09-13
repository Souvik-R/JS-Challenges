let items = [250, 360, 274, 450, 509];

let idx = 0;
for (let val of items) {
    console.log(`value at index ${idx} = ${val}`);
    let offer = val / 10;
    console.log(offer);
    items[idx] = items[idx] - offer;
    console.log(`value after offer applied is ${items[idx]}`);
    idx++;
}


// for (let i = 0; i < items.length; i++) {
//     let offer = items[i] / 10;
//     console.log(offer);
//     items[i] -= offer;
// }
// console.log(items);


//REDUCE***************************************************************************
// let items = [250, 360, 274, 450, 509];

// const output = items.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// });

// console.log(output);


//FILTER***************************************************************************
// let marks = [93, 59, 87, 97, 74, 91];

// const toppers = marks.filter((val)=>{
//     return val > 90;
// });
// console.log(toppers);


//Producing array***************************************************************************
// let n = prompt("Enter a number : ");
// let arr = [];

// for (let i = 1; i <= n; i++) {
//     arr[i - 1] = i;
// };
// console.log(arr);


//SUM USING REDUCE***************************************************************************
// let n = prompt("Enter a number : ");
// let arr = [];

// for (let i = 1; i <= n; i++) {
//     arr[i - 1] = i;
// };
// console.log(arr);
// let sum = arr.reduce((res, curr) => {
//     return res + curr;
// });
// console.log(sum);


//FACTORIAL USING REDUCE***************************************************************************
// let n = prompt("Enter a number : ");
// let arr = [];

// for (let i = 1; i <= n; i++) {
//     arr[i - 1] = i;
// };
// console.log(arr);
// let sum = arr.reduce((res, curr) => {
//     return res + curr;
// });
// console.log("Sum is :", sum);
// let factorial = arr.reduce((res, curr) => {
//     return res * curr;
// });
// console.log("Factorial is :", factorial);


// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (e) => {
//     console.log(e);
// }


// let div = document.querySelector('div');
// div.onmouseover = () => {
//     console.log("You are inside div");
// }


let changeBtn = document.querySelector("#mode");

currMode = "light";

changeBtn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark"
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currMode = "light"
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);
})