// let items = [250, 360, 274, 450, 509];

// const output = items.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// });

// const output = items.reduce((acc, curr)=>{
//     acc = acc + curr;
//     return acc;
// }, 0)

// console.log(output);

// const output = items.reduce((acc, curr) => {
//     if (curr > acc) {
//         acc = curr;
//     }
//     return acc;
// }, 0);

// console.log(output);

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 },
    { name: 'Eve', age: 35 }
];


const output = people.reduce(function (acc, curr) {
    if(acc[curr.age]){
        acc[curr.age].push(curr);
    } else {
        acc[curr.age] = [];
    }
    return acc;
}, {});

console.log(output);


// {
//    '25': [ { name: 'Charlie', age: 25 } ],
//    '30': [ { name: 'David', age: 30 } ],
//    '35': []
// }