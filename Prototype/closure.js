// <---------- SETTIMEOUT + CLOSURES ---------->
// <---------- 1. EXAMPLE 1 ---------->
// function x() {
//     let a = 5;
//     setTimeout(function() {
//         console.log(a);
//     }, 3000);
//     console.log("Hello, JavaScript!"); // IT PRINT FIRST BECAUSE TIME, TIDE, & JS WAIT FOR NONE
// }
// x();


// <---------- 2. EXAMPLE 2 ---------->
// IT WON'T WORK BECAUSE VAR IS GLOBAL SCOPE IT RUNS BEFORE THE SETTIMEOUT EXECUTE A VALUE IS 6
// function x() {
//     for(var i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Hello, JavaScript!");
// }
// x();


// <---------- 3. EXAMPLE 3 ---------->
// IT WORK BECAUSE LET IS BLOCKED SCOPED
// function x() {
//     for(let i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Hello, JavaScript!");
// }
// x();


// <---------- 4. EXAMPLE 4 ---------->
// EACH & EVERY TIME CLOSE FUNCTION IS CALLED IT IS REFERRING TO DIFFERENT MEMORY LOCATION WHICH IS SEPARATE COPY OF I
// function x() {
//     for(var i = 1; i <= 5; i++) {
//         function close(x) {
//             setTimeout(function () {
//                 console.log(x);
//             }, x * 1000);
//         }
//         close(i);
//         // EVERY TIME CLOSE FUNCTION IS CALLED HAS A NEW COPY OF I INIT
//     }
//     console.log("Hello, JavaScript!");
// }
// x();


const obj = {
    a: 1,
    b: function() {
        return this.a;
    },
    c: () => {
        return this.a;
    }
};

console.log(obj.b()); 
// console.log(obj.c());

// const test = obj.b;
// console.log(test());    // Output 3?

// const testArrow = obj.c;
// console.log(testArrow());
