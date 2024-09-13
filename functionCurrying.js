

// What is Currying in javascript? 

// Function currying in JavaScript is a technique of transforming a function that 
// takes multiple arguments into a sequence of nesting functions, each with only one argument.
// It allows us to create more modular and reusable code.


// const curriedAdd = (a) => {
//     return (b) => {
//         return (c) => {
//             return a + b + c
//         }
//     }
// }

// const curry = curriedAdd(1)(2)(3);
// console.log(curry);


// Currying using Bind method.

// 1.

function multiply(x, y){
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 3, 2);

multiplyByTwo();

// 2.

function add(a, b, c) {
    console.log(a + b + c);
}

let sumByTwo = add.bind(this, 3, 2, 3);

sumByTwo();


// Currying using Closure.

let multiplyInClosure = function (x){
    return function (y) {
        console.log(x * y);
    }
}

let data = multiplyInClosure(3);

data(4);

/**
 * Currying refers to the process of transforming a function with multiple arity into the same 
 * function with less arity. The curried effect is achieved by binding some of the arguments to 
 * the first function invoke, so that those values are fixed for the next invocation.
 */