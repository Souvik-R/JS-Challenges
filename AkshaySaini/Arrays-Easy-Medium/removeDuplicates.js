

// Remove duplicates from a sorted array.
// Given an integer array nums sorted in non-decreasing order,
// remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same. 
// Then return the number of unique elements in nums.

let removeDuplicates = function (nums) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[x]) {
            x++;
            nums[x] = nums[i];
        }
    }
    return x + 1;
}
const sortedArr = [0, 0, 1, 1, 2, 2, 2, 4, 5, 5];

const result = removeDuplicates(sortedArr);
console.log(result);