const object = {
    firstName: "Souvik",
    lastName: "Roy",
}

let printBindMethod = function (city, country, Asia){
    console.log(this.firstName + " " + this.lastName + " from " + city + ", " + country + ", " + Asia);
}

let printMyName = printBindMethod.bind(object, "Kolkata", "India");

printMyName("Asia");

// This is how bind method works. now below i have created my own bind method.

Function.prototype.myBind = function(...args){
    let obj = this
    params = args.slice(1);
    // console.log(obj, "+++++++++++++++++++");
    return function(...args2){
        obj.apply(args[0], [...params, ...args2]);
    }
}


let printMyNameForMyBind = printBindMethod.myBind(object, "Panskura", "India");
console.log(printMyNameForMyBind);
printMyNameForMyBind("Asia");
