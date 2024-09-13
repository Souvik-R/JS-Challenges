

// Prototypes are the mechanism by which JavaScript objects inherit features from one another.

//  Inheritance is the process by which genetic information is passed on from parent to child

function Person(first, last, age, eyecolor) {

    this.firstName = first;

    this.lastName = last;

    this.age = age;

    this.eyeColor = eyecolor;

}

let john = new Person("John", "Doe", 25, "blue");

Person.prototype.nationality = "English";