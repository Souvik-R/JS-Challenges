
var isPlaindrome = function (x) {
    if (x < 0) return false;
    const str = x.toString();
    return str === str.split('').reverse().join('');
}
const data = isPlaindrome(7227);
console.log(data);


var isPlaindrome1 = function (x) {
    if (x < 0) return false;
    let xCopy = x;
    let rev = 0;

    while (x > 0) {
        let rem = x % 10;
        rev = (10 * rev) + rem;
        x = Math.floor(x / 10);
    }
    return rev == xCopy;
}

const data1 = isPlaindrome(7227);
console.log(data1);