

// 1. merge two array

const array1 = [2, 3, 8, 4];
const array2 = [6, 9, 5, 1];

let mergeArray = (arr1, arr2) => {
    let result = [];

    for(let i = 0; i < arr1.length; i++){
        result.push(arr1[i]);
    };

    for(let j = 0; j < arr2.length; j++){
        result.push(arr2[j]);
    };

    return result;
};

console.log(mergeArray(array1, array2));