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
var a = [10, 11, 12, 13, 14];
function print(b, ...a){
    console.log(b, a);
};
print(8, 9, 10, 11, 12);