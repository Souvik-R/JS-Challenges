
// function x(a: number, b: number): number {
//     return a + b;
// }

// x(5, 6);
// console.log(x(5, 6));

let person = {
    name: "jack",
    age: 20,
    location: {
        city: "delhi",
        pincode: 300000
    }
};

let newPerson = { ...person };

newPerson.name = "john";
newPerson.location.city = "mumbai";

console.log(person);
console.log(newPerson);

