
// function findNegativeCount(array){
//     let count = 0;
//     for(i = 0; i < array.length; i ++){
//         if(array[i] < 0){
//             count = count + 1;
//         }
//     }
//     return count;
// }


// const arr = [100, -40, -8, 6, -9];

// const result = findNegativeCount(arr);
// console.log(result);

const obj = {
    a: 1,
    b: 2,
    sum(){
        return this.a + this.b
    }
}; 
const result = obj.sum.bind(obj);
console.log(result());


