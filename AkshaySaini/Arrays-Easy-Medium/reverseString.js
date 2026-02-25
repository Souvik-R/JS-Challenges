

// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.


const reverseString = function(s){
    const arr = s.split("");
    const len = arr.length;
    const halfLen = Math.floor(len / 2);

    for (let i = 0; i < halfLen; i++) {
        let temp = arr[i];
        arr[i] = arr[len - 1 - i];
        arr[len - 1 - i] = temp;
    }
    return arr.join("");
}
const result = reverseString("Souvik Roy + Srijani Das");
console.log(result);