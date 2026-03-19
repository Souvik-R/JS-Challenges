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

// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 25 },
//     { name: 'David', age: 30 },
//     { name: 'Eve', age: 35 }
// ];

// let result = {};
// for(let i = 0; i < people.length; i++){
//     if(result[people[i].age]){
//         result[people[i].age]++
//     } else {
//         result[people[i].age] = 1;
//     }
// }


// const output = people.reduce(function (acc, curr) {
//     if(acc[curr.age]){
//         acc[curr.age].push(curr);
//     } else {
//         acc[curr.age] = [];
//     }
//     return acc;
// }, {});

// console.log(result);


// {
//    '25': [ { name: 'Charlie', age: 25 } ],
//    '30': [ { name: 'David', age: 30 } ],
//    '35': []
// }

// Two Sum(given a target and check which sum are matching the target from the array and return the indexes)

const array = [9, 3, 5, 2];

const twoSum = (nums, target) => {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j];
            }
        }
    }
}

console.log(twoSum(array, 7));
