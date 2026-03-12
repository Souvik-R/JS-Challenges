// Linear Search 
// const arr = [1, 7, 2, 9, 0, 4]; find an index of a given number

function linearSearch(arr, matchNum){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == matchNum){
            return i;
        }
    };
    return -1;
}
const arr = [1, 7, 2, 9, 0, 4];
console.log(linearSearch(arr, 0));