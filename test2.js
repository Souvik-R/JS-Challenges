// "use strict"

// // console.log(window); //global object

// // x();
// // console.log(b)
// // a();
// // function x(){ // function declaration
// //     console.log("first")
// // }

// // var b = 10;
// // var a = function(){ // function expression
// //     console.log("second")
// // }
// // a();



// // Hoisting is a phenomenal in javascript that we can access variables and functions even before
// // we initialized it or put some value in it.


// let obj = {
//     firstName: 'Souvik',
//     lastName: "Roy",
//     printFullName: function (hometown, state) {
//         // console.log(this);
//         console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
//     }
// }

// // obj.printFullName("Panskura", "West Bengal");


// let obj2 = {
//     firstName: 'Srijani',
//     lastName: "Roy",
// }

// // call method.
// obj.printFullName.call(obj2, "Medinipore", "West Bengal");

// // apply method.
// obj.printFullName.apply(obj2, ["Medinipore", "West Bengal"]);

// // bind method
// let output = obj.printFullName.bind(obj2, "Medinipore", "West Bengal");
// console.log(output());


// // function b(name){ // parameter
// //     console.log(name);
// // }

// // b("Srijani"); // argument



// function t(){
//     console.log("Hello");
// }

// const fn = function(){
//     console.log("Hello");
// }

// const test = () => {
//     console.log("Hello");
// }

// var a = [10, 11, 12, 13, 14];
// function print(b, ...a){
//     console.log(b, a);
// };
// print(8, 9, 10, 11, 12);



// challange
// function show(){
//     {
//         // (function x(){
//             var x = 9;
//             var y = 10;
//         // })();
//     }
//     console.log(x, y);
// }
// show();


// character count from a string.
// const str = "hare krishna hare krishna krishna krishna hare hare";
// const obj = {};
// for (let data of str) {
//   if (obj[data]) {
//     obj[data] += 1;
//   } else {
//     obj[data] = 1;
//   }
// }
// console.log(obj);


// Loop inside loop
// for (i = 0; i < 5; i++) {
//     for (j = 0; j <= i; j++) {
//         console.log("i=" + i + ", j=" + j);
//     }
// }

// Palindrome
// var isPlaindrome = function (x) {
//     if (x < 0) return false;
//     const str = x.toString();
//     return str === str.split('').reverse().join('');
// }
// const data = isPlaindrome(7227);
// console.log(data);

// console.log("/////////////////////////////");
// const res = parseInt("123.45");
// console.log(res);

// let u = 0;
// while (u < 5) {
//     console.log("Hello World");
//     u++;
// }


// count digit

// function counter(n) {
//     if(n == 0) return 1;
//     n = Math.abs(n);
//     let count = 0;
//     while (n > 0) {
//         n = Math.floor(n / 10);
//         count++;
//     }
//     return count;
// }

// let num = -3;
// const data = counter(num);
// console.log(data);


// function sum(num){
//    return num * 2
// }
// const arr = [1, 3, 4, 7, 9];

// const mapData = arr.map(sum);

// const data = arr.filter((x) => x > 4);
// console.log(mapData);


// function findSum(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i ++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// const array = [3, 4, 2, 7]
// console.log(findSum(array));



const obj = {};
obj['1'] = "one";
obj[true] = "yes";

console.log(obj); 
// { '1': 'one', 'true': 'yes' }

