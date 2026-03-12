// Binary search = this is a different search mechanism all together, 
// where a sorted array will be there and you have to perform the 
// search, the array will always be sorted ok, 
// suppose array is = 
// const arr = [-2, -1, 3, 6, 8, 20];
// I have to always calculate left and right ok... of this array
// left = 0 and right = arr.length - 1; ok?
// now also you have to find the middle ok, how? 
// formula is = left + right / 2 ok? now suppose the array has a odd length ok means 5 ok, 
// now the middle of this array is 2.5 right, then how it will handle further?? for this when
// calculating middle you have to alwasy use Math.floor to ignore the dacimal right? so the 
// final formula of calculating middle is Math.floor((left + right) /2) ok? so the answer will 
// be 2 right..
// now make a function that will take an array and a target number ok? let's do it.

const search = function(nums, target){
    let left = 0;
    let right = nums.length - 1;

    while(right >= left){
        let middle = Math.floor((left + right) / 2);
        // console.log(middle);
        if(target === nums[middle]){
            return middle;
        } else if(target < nums[middle]){
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    };
    return -1;
};


const arr = [-2, -1, 3, 6, 8, 20];
console.log(search(arr, -1))