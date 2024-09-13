

// Polymorphism in Object-Oriented Programming is the ability to create 
// a variable, a function, or an object that has more than one form.


class Animal {
    constructor(name){
        this.name = name
    }

    eats(){
        console.log(this.name + ' eats food');
    }
}

class Alligator extends Animal {
    eats(){
        super.eats();
        console.log(this.name + ' eats fishes');
    }
}

const cat = new Alligator('Cat');
cat.eats();


// const animal = new Animal('Dog');

// animal.eats();