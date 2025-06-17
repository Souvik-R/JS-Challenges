let obj1 = {
    first_name: "Souvik",
    last_name: "Roy",
    // printFullName: function(){
    //     console.log(this.first_name + " " + this.last_name);
    // }
}

let printFullName = function(homeTown, state){
    console.log(this.first_name + " " + this.last_name + " from " + homeTown + ", " + state);
}

let obj2 = {
    first_name: "Disha",
    last_name: "Chakraborty"
}


printFullName.call(obj2, "Kolkata", "West Bengal");
printFullName.apply(obj2, ["Kolkata", "West Bengal"]);
let bind = printFullName.bind(obj2, "Kolkata", "West Bengal");
bind();