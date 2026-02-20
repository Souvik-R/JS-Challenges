
// Print 1 to n using recursion

function print(x){
    let num = 5;
    if(x > num) return; // Base case
    console.log(x);
    print(++x); // Recursive case
}

print(1);


// Print n to 1 using recursion

function fun(num){
    if(num < 1) return; // Base case
    console.log(num);
    fun(--num); // Recursive case
}
fun(5)
