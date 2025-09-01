// palindrome

const palindrome = function(num){
    let numCopy = num;
    let reverse = 0;

    while(num > 0){
        let reminder = num % 10;
        reverse = (10 * reverse) + reminder;
        num = Math.floor(num/10);
    }
    return reverse == numCopy;
}

const results = palindrome(121);
console.log(results);
