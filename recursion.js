
// // Print 1 to n using recursion

// function print(x){
//     let num = 5;
//     if(x > num) return; // Base case
//     console.log(x);
//     print(++x); // Recursive case
// }

// print(1);


// // Print n to 1 using recursion

// function fun(num){
//     if(num < 1) return; // Base case
//     console.log(num);
//     fun(--num); // Recursive case
// }
// fun(5)


let missingNumber = function(nums) {
    let n = nums.length;
    let totalSum = n * (n + 1) / 2;
    let partialSum = 0
    for(let i = 0; i < n; i++) {
        partialSum = partialSum + nums[i];
    }
    return totalSum - partialSum;
};

let nums = [3, 0, 1];

console.log("Array:", nums);
console.log("Missing Number:", missingNumber(nums));