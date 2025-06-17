/* PROTOTYPE, PROTOTYPAL INHERITANCE, PROTOTYPE CHAIN */

// let arr = [1, 2, 3, 4];
// // IN CASE OF ARRAY
// console.log(arr.__proto__);
// console.log(Array.prototype);
// console.log(arr.__proto__.__proto__);
// console.log(Object.prototype);
// console.log(arr.__proto__.__proto__.__proto__);


// IN CASE OF FUNCTIONS
// function hello() {
//     // console.log("Hello");
// }
// console.log("Function1-", hello.__proto__);
// console.log("Function2-", Function.prototype);

// console.log(hello.__proto__.__proto__);
// console.log(hello.__proto__.__proto__.__proto__);


// let obj = {
//     kola: "paka",
//     kacha: "aam"
// }

// console.log(obj.__proto__);
// console.log(Object.prototype);

// console.log(obj.__proto__.__proto__);



/* WHY WE DON'T DO LIKE THIS */
// let object = {
//     name: "Dip",
//     city: "Raghunathpur",
//     getIntro: function () {
//         console.log(`${this.name} From ${this.city}`);
//     },
// };

// let object2 = {
//     name: "SOUVIK",
// };

// console.log("1", object2.__proto__);
// console.log("2", Object.prototype);

// object2.__proto__ = object; // FORCEFULLY SETUP THE object2 PROTOTYPE INTO object
// console.log("3", object2.__proto__);

// console.log(object2.name);
// console.log(object2.city); // object2 INHERIT PROPERTIES OF object THIS IS KNOWN AS PROTOTYPAL INHERITANCE
// console.log(object2.getIntro()); // object2 INHERIT METHODS OF object THIS IS KNOWN AS PROTOTYPAL INHERITANCE */



// Function.prototype.myBind = function () {
//     console.log("Hello, World!");
// }
// function hello () {}
// console.log(hello.__proto__.myBind());

// let arr = [1, 2, 3, 4, 5]
// Function.prototype.myBind = function () {
//     for(let i=0; i < arr.length; i++) {
//         console.log(arr[i]*2);
//     }
// }
// function hello () {}
// hello.__proto__.myBind();

// let arr = [1, 2, 3, 4, 5];
// Array.prototype.myBind = function () {
//     // for (let i = 0; i < arr.length; i++) {
//         //     console.log(arr[i] * 2);
//         // }
//         return [];
//     }
// function hello() {}
// // console.log(hello.__proto__.myBind());

// let data = arr.myBind(() => {
//     return;
// })

let arr = [1, 2, 3, 4, 5];

Array.prototype.myBind = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this)); // Similar to map, it passes (element, index, array)
    }
    return result;
}

let data = arr.myBind((element) => {
    return element * 2; // Multiply each element by 2
});

console.log(data); // Output: [2, 4, 6, 8, 10]
