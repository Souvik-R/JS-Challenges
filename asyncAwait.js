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

function outer(){
  let count = 0;
  return function inner(){
    count++
    return count;
  }
}
let data = outer();
console.log(data());
console.log(data());
console.log(data());
console.log(data());
console.log(data());
