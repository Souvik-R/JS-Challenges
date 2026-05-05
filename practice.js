

// // 1. merge two array

// const array1 = [2, 3, 8, 4];
// const array2 = [6, 9, 5, 1];

// let mergeArray = (arr1, arr2) => {
//     let result = [];

//     for(let i = 0; i < arr1.length; i++){
//         result.push(arr1[i]);
//     };

//     for(let j = 0; j < arr2.length; j++){
//         result.push(arr2[j]);
//     };

//     return result;
// };

// // console.log(mergeArray(array1, array2));


// // 2. reverse an array of integer

// const arr = [2, 4, 1, 8];

// let reverseInt = function(array){
//     let res = [];
//     for(i = array.length - 1; i >= 0; i--){
//         console.log(array[i]);
//         res.push(array[i]);
//     };
//     return res;
// }

// // console.log(reverseInt(arr));


// // 3. Find Max Element

// const element = [3, 5, 9, 6, 100];

// function maxElem(num){
//     let max = num[0];
//     for(let i = 1; i < num.length; i++){
//         if(num[i] > max){
//             max = num[i];
//         }
//     }
//     return max;
// }

// // console.log(maxElem(element));


// // 4. Second Largest


// const fixedArr = [2, 8, 45, 32, 1];

// function largestElem(arr){
//     let first = -Infinity; second = -Infinity;

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > first){
//             second = first;
//             first = arr[i];
//         } else if(arr[i] > second && arr[i] != first){
//             second = arr[i];
//         }
//     }
//     return [first, second];
// }

// // console.log(largestElem(fixedArr));


// let list = [
//     {name: "Puma Shoes", cat_id: 5, price: 300},
//     {name: "Adidas Shoes", cat_id: 9, price: 600},
//     {name: "Nike Shoes", cat_id: 5, price: 700},
// ];


// function getResult(arr, catId){
//     return arr.reduce((acc, curr) => {
//         if(curr.cat_id === catId){
//             acc.count++;
//             acc.totalPrice += curr.price;
//         }
//         return acc;
//     }, {count: 0, totalPrice: 0});
// };

// // console.log(getResult(list, 5));

// function countCategory(arr, catId) {
//     return arr.filter((cat) => cat.cat_id === catId).length;
// };

// // console.log(countCategory(list, 5));

// let products = [
//   { name: "Laptop", cat_id: 2, price: 50000 },
//   { name: "Mouse", cat_id: 1, price: 500 },
//   { name: "Keyboard", cat_id: 1, price: 1500 }
// ];


// function totalPrice(arr, catId) {
//     return products.reduce((acc, curr) => {
//         return curr.cat_id === catId ? acc + curr.price : acc;
//     }, 0);
// }

// // console.log(totalPrice(products, 1));


// merge two array

// let arr1 = [1, 3, 5, 7];
// let arr2 = [8, 4, 9, 2];

// function sum(first, second){
//     let mergeArr = [];
//     for(let i = 0; i < first.length; i++){
//         mergeArr.push(first[i]);
//     }
//     for(let j = 0; j < second.length; j++){
//         mergeArr.push(second[j]);
//     }
//     return mergeArr;
// }
// console.log(sum(arr1, arr2));


// IIKE

// (function x(a, b){
//     console.log(a + b);
// })(3, 4)


