

// function outing() {
//     var c = 20;
//     function outer(b) {
//         var a = 10;
//         function inner() {
//             console.log(a, b, c);
//         }
//         return inner;
//     }
//     return outer;
// }

// const data = outing();
// const lastData = data("Hello");
// lastData();


// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//     console.log(`${property}: ${object[property]}`);
// }


// function a(){
//     var x = 10;
//     function b() {
//         console.log(x);
//     }
//     b();
// }
// a();

// const users = [
//     { firstName: "Souvik", lastName: "Roy", age: 25 },
//     { firstName: "Payel", lastName: "Goswami", age: 30 },
//     { firstName: "Arnab", lastName: "Sabud", age: 40 },
//     { firstName: "Avik", lastName: "Chakraborty", age: 25 }
// ];

// console.table(users);


// function z() {
// function x() {
//     var a = 10;
//     return function y() {
//         console.log(a);
//     }
// return y;
// }
// var s = x();
// console.log(s);
// s();

// }
// z();


/* 
    Closure: Function along with it's lexical scope bundled together forms a closure.
*/

// function x() {
//     for (var i = 1; i <= 5; i++) {
//         function z(u) {
//             setTimeout(function y() {
//                 console.log(u);
//             }, i * 1000);
//         }
//         z(i)
//     }
//     console.log("Hi Souvik");
// }
// x();

function outest(){
    var c = 100;
    function outer(b){ 
        function inner(){
            console.log(x, b, c);        
        }
        var x = 10;
        return inner;
    }
    return outer;
}
let x = 20;
const close = outest()("Hi Souvik");
close();


// Closure is used to Data hiding(using constructor function)

function Counter() {
    var count = 0;
    this.incrementCounter = function () {
        count++;
        console.log(count);
    }
    this.decrementCounter = function () {
        count--;
        console.log(count);
    }
}

var counter1 = new Counter();

counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
