// Write a program to find an element from an array and return it's index number, if the number
// is not present in that array, return -1 .

const array = [10, 3, 6, 7, 9, 18, 56];

function searchElement(arr, number){
    for(k = 0; k < arr.length; k ++){
        if(arr[k] == number){
            return k;
        }
    };
    return -1;
}

let result = searchElement(array, 58);
console.log(result);



// Write a program to find the negative numbers count of an array, if no negative number found return 0.  

const NegativeNumberArr = [2, -5, -8, 9, 12, -34];

function negativeNum(array){
    let count = 0;
    for(j = 0; j < array.length; j ++){
        if(array[j] < 0){
            count = count + 1;
        };
    };
    return count;
}

const negativeNumbers = negativeNum(NegativeNumberArr);
console.log(negativeNumbers);


// Write a program to find the largest number in an array.

const largestArr = [10, 38, 42, 12, 9, 132];

function findLargest(arr){
    let largest = -1;
    for (let u = 0; u < arr.length; u ++){
        if(arr[u] > largest){
            largest = arr[u];
        };
    };
    return largest
}

const largestRes = findLargest(largestArr);
console.log(largestRes);