
// Star Pattern : 
 /*   
    ****
    ****
    ****
    ****   
           */

let n = 4;

for(let i = 0; i < n; i ++){
    let row = "";
    for(let j = 0; j < n; j ++){
        row = row + " * ";
    }
    console.log(row);
}

console.log("================================");

 /*   
    *
    **
    ***
    ****   
           */

let s = 5;
for(let k = 0; k < s; k ++){
    let increment = "";
    for(let h = 0; h <= k; h ++){
        increment = increment + " * ";
    }
    console.log(increment);
}

console.log("================================");

 /*   
    1
    1 2
    1 2 3
    1 2 3 4 
    1 2 3 4 5
                */

let w = 5;
for(let l = 0; l < w; l ++){
    let increment = "";
    for(let r = 0; r <= l; r ++){
        increment = increment + (r + 1) + " "
    }
    console.log(increment);
}


console.log("================================");

 /*   
    1
    2 2
    3 3 3
    4 4 4 4 
    5 5 5 5 5
                */

let num = 5;

for(let o = 1; o <= num; o ++){
    let data = "";
    for(let p = 1; p <= o; p ++){
        data = data + (o) + " ";
    }
    console.log(data);
}

console.log("================================");

 /*   
    1 2 3 4 5
    1 2 3 4 
    1 2 3
    1 2
    1
         */

let m = 5;
for (w = 0; w < m; w++) {
    let data = "";
    for (let r = 0; r < m-w; r++) {
        data = data + (r + 1) + " ";
    }
    console.log(data);
}