
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


// let missingNumber = function(nums) {
//     let n = nums.length;
//     let totalSum = n * (n + 1) / 2;
//     let partialSum = 0
//     for(let i = 0; i < n; i++) {
//         partialSum = partialSum + nums[i];
//     }
//     return totalSum - partialSum;
// };

// let nums = [3, 0, 1];

// console.log("Array:", nums);
// console.log("Missing Number:", missingNumber(nums));

// var singleNumber = function (nums) {
//     let hash = {}
//     for (let i = 0; i < nums.length; i++) {
//         if (!hash[nums[i]]) {
//             hash[nums[i]] = 1
//         } else {
//             hash[nums[i]]++
//         }
//     }
//     for (let i = 0; i < nums.length; i++) {
//         if (hash[nums[i]] == 1) {
//             return nums[i]
//         }
//     }
//     return hash;
// };
// let nums = [3, 2, 1, 2, 5, 3, 5];

// console.log(singleNumber(nums))

// let findMaxConsecutiveOnes = function(nums) {
//     let currCount = 0;
//     let maxCount = 0;

//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] == 1){
//             currCount++
//         } else {
//             maxCount = Math.max(currCount, maxCount);
//             currCount = 0
//         }
//     }
//     return Math.max(maxCount, currCount)
// };


// move zeros
// output = [2, 7, 4, 1, 0, 0, 0];

function moveZero(arr){
    let x = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== 0){
            arr[x] = arr[i];
            x++;
        }
    };
    for(let i = x; i < arr.length; i++){
        arr[i] = 0;
    };
    return arr;
}
let arr = [2, 7, 0, 4, 0, 1, 0];
const result = moveZero(arr);

console.log(result);



