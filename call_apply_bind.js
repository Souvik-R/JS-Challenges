// Call Method

const name = {
    firstName: "Souvik",
    lastName: "Roy",
}

let printFullName = function (homeTown){
    console.log(this.firstName +' '+ this.lastName + ' from '+ homeTown);
}
printFullName.call(name, "Panskura");

const name2 = {
    firstName: "Payel",
    lastName: "Goswami",
}

// Function Borrowing
printFullName.call(name2, "Kolkata");


// Apply Method

printFullName.apply(name2, ["Japan"]);

// Bind Method

let bindThing = printFullName.bind(name2, "England");

console.log(bindThing);

bindThing();
