// const student = {
//     fullName: "Souvik Roy",
//     marks: 96.4,
//     printMarks: function () {
//         console.log("Marks =",this.marks);
//     }
// }


const employee = {
    calcTax () {
        console.log("Tax is 10%");
    }
}

const karanArjun = {
    salary: 60000,
}

karanArjun.__proto__ = employee