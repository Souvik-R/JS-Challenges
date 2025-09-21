
// Given an integer array nums and an integer val, remove all occurrences 
// of val in nums in-place. The order of the elements may be changed. 
// Then return the number of elements in nums which are not equal to val.

const removeElement = function (arr, val) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== val) {
            arr[x] = arr[i];
            x++;
        }
    }
    // arr.length = x;
    return x;
}


const array = [0, 2, 2, 4, 4, 5, 6, 6];

const result = removeElement(array, 6);
console.log(array);