const users = [
    { firstName: "Souvik", lastName: "Roy", age: 25 },
    { firstName: "Payel", lastName: "Goswami", age: 30 },
    { firstName: "Arnab", lastName: "Sabud", age: 40 },
    { firstName: "Avik", lastName: "Chakraborty", age: 25 }
];


const output = users.filter(name => name.age > 30).map(e => e.firstName);
console.log("1111111111111111111111111111111111");
console.log(output);
console.log("1111111111111111111111111111111111");

// [ 'Arnab' ]


const reduce = users.reduce(function (acc, curr) {
    if (curr.age > 30) {
        acc.push(curr.firstName);
    }
    return acc;
}, []);

console.log("2222222222222222222222222222222222");
console.log(reduce);
console.log("2222222222222222222222222222222222");
// [ 'Arnab' ]


const count = users.reduce( function (acc, curr) {
    if(acc[curr.age]) {
        acc[curr.age] ++
    } else {
        acc[curr.age] = 1
    }
    return acc
}, {})

console.log("3333333333333333333333333333333333");
console.log(count);
console.log("3333333333333333333333333333333333");
// { '25': 2, '30': 1, '40': 1 }


const letters = ['a', 'b', 'c', 'd', 'a', 'c', 'd'];

let countUsingForeach = {};

letters.forEach(item => {
    if(countUsingForeach[item]) {
        countUsingForeach[item] ++;
    } else {
        countUsingForeach[item] = 1;
    }
})

console.log("444444444444444444444444444444444");
console.log(countUsingForeach);
console.log("444444444444444444444444444444444");
// { a: 2, b: 1, c: 2, d: 2 }


// FIND SUM OF AN ARRAY

let arr = [1, 3, 4, 8, 9];

function findSum(arr1) {
    let sum = 0;
    for(let i = 0; i < arr.length; i ++) {
       sum = sum + arr[i]
    }
    return sum;
}

console.log("555555555555555555555555555555555");
console.log(findSum(arr));
console.log("555555555555555555555555555555555");

// FIND MAX VALUE IN AN ARRAY

let maxArr = [1, 3, 8, 9, 4];

let outputMax = maxArr.reduce(function (acc, curr) {
    if(curr > acc) {
        acc = curr;
    }
    return acc;
}, 0);

console.log("666666666666666666666666666666666");
console.log("Max value is " + outputMax);
console.log("666666666666666666666666666666666");
// EVEN AND ODD COUNTING

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers.reduce((acc, num) => {
    if (num % 2 === 0) {
        acc.even += 1;
    } else {
        acc.odd += 1;
    }
    return acc;
}, {even:0, odd:0});

console.log("7777777777777777777777777777777777");
console.log(result); // Output: { even: 5, odd: 5 }
console.log("7777777777777777777777777777777777");


const vowels = 'aeiouAEIOU';
const string = "HelloO, how are you doing today?";
const data = string.split('');
console.log(data);
const count1 = string.split('').reduce((acc, curr) => {
    if (vowels.includes(curr)) {
        acc += 1;
    }
    return acc;
}, 0);

console.log("8888888888888888888888888888888888");
console.log(count1);
console.log("8888888888888888888888888888888888");