// ## Write a program to find the second largest number of an array.

function secondLargest(array) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    if(array.length < 2){
        return "Array should have at least two elements";
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = array[i];
        } else if (array[i] > secondLargest && array[i] != firstLargest) {
            secondLargest = array[i];
        }
    }
    return secondLargest;
}

let array = [3, 6, 6, 8, 20, 20];

let result = secondLargest(array);
console.log(result);
