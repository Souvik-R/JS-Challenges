// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolve succesfully");
//   }, 10000);
// });

// async function handlePromise() {
//   console.log("HEYYYYYYYYYYYYY");
//   const val = await p;
//   console.log(val);
//   console.log("Namaste Javascript");
// }

// handlePromise();

// // function getData(){
// //     p.then((res) => console.log(res));
// //     console.log("Hello");
// // };
// // getData();

// debouncing

// let count = 0;
// const getData = function(){
//   console.log("Called...", count++);
// }


// const betterFunc = function(fn){
//   let timer;
//   return function(){
//     let context = this, args = arguments
//     clearTimeout(timer);
//     timer = setTimeout(()=>{
//       fn.apply(context, args);
//     }, 300)
//   }
// }


// const doSomeMagic = betterFunc(getData)



// Closure

// function outer(){
//   let count = 0;
//   return function inner(){
//     count++
//     return count;
//   }
// }
// let data = outer();
// console.log(data());
// console.log(data());
// console.log(data());
// console.log(data());
// console.log(data());


// const str = "I love javascript";

// const count = str.split(" ").reduce((acc) => {
//     return acc + 1;
// }, 0);

// console.log(count);

// const str = "hello world";

// const result = str
//     .split(" ")
//     .map(word => word[0].toUpperCase() + word.slice(1))
//     .join(" ");

// console.log(result);





const arr = [1, [2, 3, [4, 5, [6]]], 7];

function flattenArray(result) {
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < result.length; i++) {
            if (Array.isArray(result[i])) {
                // remove nested array
                let temp = result[i];
                result.splice(i, 1, ...temp);
                swapped = true;
            }
        }
    }
    return result;
}

console.log(flattenArray(arr));



function moveOnesOptimized(arr) {
  let left = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      // swap
      let temp = arr[left];
      arr[left] = arr[i];
      arr[i] = temp;

      left++;
    }
  }

  return arr;
}

console.log(moveOnesOptimized([1, 0, 1, 0, 1]));