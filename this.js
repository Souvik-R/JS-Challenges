// "use strict"
// this is global space.

// console.log(this); // globalObject - window, global

// this inside a function

// function x(){
//     console.log(this);
// }

// this in strict mode - (this substitutions)

// if the value of this keyword is undefined or null
// this keyword will be replaced with globalObject
// only in non strict mode.

// this keyword value depends on how the function is called (window).

// x(); // undefined
// window.x(); // window

// this inside an object's method.

// let obj = {
//     a: 10,
//     b: 20,
//     x: function () {
//         console.log(this);
//     }
// }
// obj.x();

// call apply bind methods. (sharing methods)

// let student = {
//     name: 'Souvik',
//     printName: function (){
//         console.log(this.name);
//     },
// };

// student.printName();

// let student2 = {
//     name: 'Risha',
// }

// student.printName.call(student2);

// this inside arrow function.

// let arrowObj = {
//     name: "Sudip",
//     printName: () => {
//         console.log(this);
//     }
// }
// arrowObj.printName();


// this inside nested arrow function.

// this inside dom


// let obj = {
//     a: 10,
//     b: 20,
//     x: function () {
//        const y = () => {
//         console.log(this.b);
//        }
//        y();
//     }
// }
// obj.x();

// console.log("start");

// function r() {
//     for (let i = 0; i <= 3; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Hello, JavaScript!");
// }
// r();


// function y() {
//     for (let i = 0; i <= 3; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Hello, JavaScript!");
// }
// y();

// const arr = [3, 5, 8, 2, 9];

// function minimum(data){
//     let min = data[0];
//     for(let i = 0; i < data.length; i++){
//         if(data[i] < min){
//             min = data[i];
//         }
//     }
//     return min;
// }

// console.log(minimum(arr));

// function largest(data){
//     let large = data[0];
//     for(let i = 0; i < data.length; i++){
//         if(data[i] > large){
//             large = data[i];
//         }
//     }
//     return large;
// };

// console.log(largest(arr));


// const arr = [3, 4, 4, 6, 5, 6];

// function removeDuplicate(data){
//     let result = [];
//     for(let i = 0; i < data.length; i++){
//         if(!result.includes(data[i])){
//             result.push(data[i]);
//         }
//     }
//     return result;
// }

// console.log(removeDuplicate(arr));


// const arr = [1,[2,3],[4,[5]]];

// function flatten(arr){
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         if(Array.isArray(arr[i])){
//             result.push(...flatten(arr[i]));
//         } else {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// console.log(flatten(arr));

// console.log(arr.flat(Infinity));




// let count = 0;
// const getData = function(){
//   console.log("Called...", count++);
// }


// const betterFunc = function(fn){
//   let timer;
//   return function(){
//     let context = this, args = arguments
//     clearTimeout(timer);
//     timer = setTimeout(()=>{
//       fn.apply(context, args);
//     }, 300)
//   }
// }


// const doSomeMagic = betterFunc(getData)


// const str = "hello world from javascript";

// const arr = str.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
// console.log(arr);


function findFirstNonRepeating(arr){
    let count = {};

    for(let num of arr){
        count[num] = (count[num] || 0) + 1;
    }

    for(let num of arr){
        if(count[num] === 1){
            return num;
        }
    }

    return null;
}

console.log(findFirstNonRepeating([1, 2, 1, 3, 2, 4, 3]));