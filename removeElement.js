const arr = [1, 3, 3, 2, 5, 6, 7];

function elementRemove(num, value){
    let x = 0;
    for(let i = 0; i < num.length; i ++){
        // console.log(num[i], value);
        if(num[i] !== value){
            num[x] = num[i]
            x ++;
        }
    }
    return x;
}

const data = elementRemove(arr, 3);

console.log(data);