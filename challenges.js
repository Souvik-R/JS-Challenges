
// ****************** Calculating the capital indexes of the given string.
let data = "SouVikrOy";
let capitalIndexes = [];

for (let i = 0; i < data.length; i++) {
    if (data[i] === data[i].toUpperCase()) {
        capitalIndexes.push(i);
    }
}

console.log("Indexes of capital letters:", capitalIndexes);
// ****************** Same using MAP function

let dataValue = "SouVikrOy";

let capitalIndexesValue = [...dataValue].map((char, index) => {
    return char === char.toUpperCase() ? index : undefined;
}).filter(index => index !== undefined);

console.log("Indexes of capital letters:", capitalIndexesValue);
