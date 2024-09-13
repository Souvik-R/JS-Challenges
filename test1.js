const numbers = [15, 2, 36, 4, 75];

const max = numbers.reduce((acc, curr) => {
    if (curr > acc) {
        acc = curr;
    }
    return acc;
}, 0);

// console.log(max);


// ****

const cart = [
    {
        name: 'shirt',
        price: 10
    },
    {
        name: 'pants',
        price: 20
    },
    {
        name: 'kurta',
        price: 20
    }
]

cart.push({
    name:"jangia",
    price: 100
});

// console.log(cart.pop());


/**
 * vowels count from a string
 */

const string = "Hello Siri!! You r amazing"
const vowels = ['a', 'e', 'i', 'o', 'u'];

// function countVowels(data) {
//     let count = 0;
//     data.toLocaleLowerCase().split("").forEach((er)=>{
//         vowels.includes(er) && count ++
//     });
//     return count;
// };

// const noOfVowels = countVowels(string);
// console.log(noOfVowels);

const count = string.split("").reduce((acc, curr) => {
    if (vowels.includes(curr)) acc += 1
    return acc;
}, 0);
console.log(count);