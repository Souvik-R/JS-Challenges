
// function outer() {
//     let a = 5;
//     function x(s) {
//         let b = 10;
//         function y() {
//             console.log(a, b, s);
//         }
//         y();
//     }
//     x('Hello world');
// }
// outer();


/**
 * 5, 10, 'Hello world'
 */


// console.log("Start");

// setTimeout(() => {
//     console.log("CallBack");
// }, 5000);

// console.log("End");

// let startDate = new Date().getTime();
// let endDate = startDate;
// while (endDate < startDate + 10000) {
//     endDate = new Date().getTime();
// }

// console.log("While Expires");

/**
 * "Start", "End", "While Expires", "CallBack"
 */

// function x() {
//     let a = 5;
//     function y() {
//         console.log(a);
//     }
//     a = 10;
//     return y;
// }
// let z = x();
// console.log(z);
// z();


// function outing() {
//     var c = 20;
//     function outer(b) {
//         var a = 10;
//         function inner() {
//             console.log(a, b, c);
//         }
//         return inner;
//     }
//     return outer
// }

// const data = outing();
// const lastData = data("Hello");
// lastData();

function x() {
    for (var i = 1; i <= 5; i++) {
        function close(j){
            setTimeout(function () {
                console.log(j);
            }, j * 1000);
        }
        close(i);
    }
    console.log("Hello, JavaScript!");
}
x();