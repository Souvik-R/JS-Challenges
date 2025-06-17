const student = {
    name: "Souvik Roy",
    age: 24,
    roll: 20 
}

// Object.assign(student,{address:"Dhaka"});
// console.log(student);

const updateStudent = {...student, name: "Sudip Roy"};

// const {...data} = updateStudent;
// const {name, age, roll} = updateStudent;

console.log(updateStudent);