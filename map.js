let nums = [1, 2, 3, 4, 5];

let newArr = nums.map((val)=>{
    return val;
});
console.log(newArr);


// map is used to generate a new array.. where as foreach cannot generate an array..it only used to get some changes.

let data = nums.map((e) => e.toString(2));
console.log(data);