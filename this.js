"use strict"
// this is global space.

console.log(this); // globalObject - window, global

// this inside a function

function x(){
    console.log(this);
}

// this in strict mode - (this substitutions)

// if the value of this keyword is undefined or null
// this keyword will be replaced with globalObject
// only in non strict mode.

// this keyword value depends on how the function is called (window).

x(); // undefined
// window.x(); // window

// this inside an object's method.

let obj = {
    a: 10,
    b: 20,
    x: function () {
        console.log(this);
    }
}
obj.x();

// call apply bind methods. (sharing methods)

let student = {
    name: 'Souvik',
    printName: function (){
        console.log(this.name);
    },
};

student.printName();

let student2 = {
    name: 'Risha',
}

student.printName.call(student2);

// this inside arrow function.

let arrowObj = {
    name: "Sudip",
    printName: () => {
        console.log(this);
    }
}
arrowObj.printName();


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

// function x() {
//     for (var i = 0; i <= 3; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Hello, JavaScript!");
// }
// x();

function y() {
    for (let i = 0; i <= 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Hello, JavaScript!");
}
y();

