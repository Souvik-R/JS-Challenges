
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

// function moveZero(arr){
//     let x = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== 0){
//             arr[x] = arr[i];
//             x++;
//         }
//     };
//     for(let i = x; i < arr.length; i++){
//         arr[i] = 0;
//     };
//     return arr;
// }
// let arr = [2, 7, 0, 4, 0, 1, 0];
// const result = moveZero(arr);

// console.log(result);


// Factorial of N numbers
// Factorial means suppose n is 5, then the factorial is =
// 5 * 4 * 3 * 2 * 1

// function fact(n) {
//     if (n == 1) return 1;
//     return n * fact(n - 1);
// }

// console.log(fact(5));


// power of two
// means I have n number means one number, now I have to check that
// number is power of two or not, so it will return true or false.
// suppose n = 16, now I have to find that 16 is power of 2 on not.


function powerOfTwo(n) {
    if (n == 1) return true; // base case
    else if (n < 1 || (n % 2 !== 0)) return false

    return powerOfTwo(n / 2); // recursive case
}

console.log(powerOfTwo(15))


