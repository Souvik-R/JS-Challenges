let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newFilter = arr.filter((val) => {
    return val % 2 !== 0;
});

console.log(newFilter);