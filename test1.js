// const numbers = [15, 2, 36, 4, 75];

// const max = numbers.reduce((acc, curr) => {
//     if (curr > acc) {
//         acc = curr;
//     }
//     return acc;
// }, 0);

// // console.log(max);


// // ****

// const cart = [
//     {
//         name: 'shirt',
//         price: 10
//     },
//     {
//         name: 'pants',
//         price: 20
//     },
//     {
//         name: 'kurta',
//         price: 20
//     }
// ]

// cart.push({
//     name:"jangia",
//     price: 100
// });

// // console.log(cart.pop());


// /**
//  * vowels count from a string
//  */

// const string = "Hello Siri!! You r amazing"
// const vowels = ['a', 'e', 'i', 'o', 'u'];

// // function countVowels(data) {
// //     let count = 0;
// //     data.toLocaleLowerCase().split("").forEach((er)=>{
// //         vowels.includes(er) && count ++
// //     });
// //     return count;
// // };

// // const noOfVowels = countVowels(string);
// // console.log(noOfVowels);

// const count = string.split("").reduce((acc, curr) => {
//     if (vowels.includes(curr)) acc += 1
//     return acc;
// }, 0);
// // console.log(count);


// Array.prototype.last = function() {
//     if(this.length === 0){
//         return -1
//     }
//     return this[this.length - 1]
// };



// const data = vowels.last();
// // console.log(data);


// var a = 5;
// var b = 7;
// var obj = {
//     a:3,
//     b:2,
//     childObj: {
//         c:1,
//         add: function(){
//             console.log(this.a + this.b + this.c)
//         }
//     }
// }

// obj.childObj.add();




// const arr = [1, 2, 3];
// arr[10] = 99;
// console.log(arr.length);
// console.log(arr);
// console.log(arr[6]);


// let user = {
//   name: "Souvik",
//   age: 25,
//   city: "Kolkata"
// };

// Object.entries(user).forEach(([key, value]) => {
//   console.log(key, value);
// });


// console.log('start');

// Promise.resolve().then(() => {
//   console.log('promise1')
// });

// (async () => {
//   console.log('call async');
//   await Promise.resolve().then(() => {
//     console.log('promise2')
//   });
//   console.log('stop async');
// })();

// Promise.resolve().then(() => {
//   console.log('promise3')
// })

// console.log('end')


// const multiDimensionalArray = [[1, 2, 2], [3, 4, 4], [5, 6, 6]];
// const data = multiDimensionalArray.flat();
// const uniqueArray = [...new Set(data)];
// console.log(uniqueArray);

// const multiArray = [1, [2, [3, 4, 4]], [5, 6, 6]];

// const flatArray = multiArray.flat(3);

// console.log(flatArray);

// const uniqueArray = [...new Set(flatArray)];

// console.log(uniqueArray); // [1, 2, 3, 4, 5, 6]


const str = "I am a software developer";

const splitData = str.split(" ");

console.log(splitData);

const mapResult = splitData.map((word) => {
    return word.split("").reverse().join("");
})

console.log(mapResult);
