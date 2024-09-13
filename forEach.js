let arr = ["kolkata", "delhi", "mumbai", "pune"];

arr.forEach(function printVal(val, idx, arr) {
    console.log(val.toUpperCase(), idx, arr);
});

// It can pass 3 things as parameters. 1. value, 2. idx, 3. array itself.

//  Higher order function
//  - Higher order function or Higher order methods are methods that either take another function as a parameter
//  - inside them or they return another function as their output.