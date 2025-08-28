

function countDigit(n) {
    // return 1 if the number is 0
    if(n == 0) return 1;
    // making negative numbers to absolute
    n = Math.abs(n);
    let count = 0; 
    while (n > 0) {
        n = Math.floor(n / 10);
        count++
    }
    return count;
}

let number = 0;

const result = countDigit(number);

console.log(result);
 

// corner cases - 1. negetive number 2. zero