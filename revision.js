
function findNegativeCount(array){
    let count = 0;
    for(i = 0; i < array.length; i ++){
        if(array[i] < 0){
            count = count + 1;
        }
    }
    return count;
}


const arr = [100, -40, -8, 6, -9];

const result = findNegativeCount(arr);
console.log(result);