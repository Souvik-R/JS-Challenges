// Palindrome

const isPalindrome = (x) => {
    return x < 0 ? false : x === +x.toString().split("").reverse().join("");
};

console.log(isPalindrome(121));
console.log(+"10");