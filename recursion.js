
// Print 1 to n using recursion

function print(x){
    let num = 10;
    if(x > num) return;
    console.log(x);
    print(++x);
}

print(1);