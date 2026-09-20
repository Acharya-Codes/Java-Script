const student = {
    name: "Acharya",
    marks: {
        maths: 90
    },
    adress: {
        city: "Cuddalore",
    }
};
console.log(student.marks?.maths); // Basically this is like error catching in other languages
console.log(student.address?.city);
console.log(student.address?.marks?.city); // Multiple chaining
// Arrays
const names = [
    {name : "A"},
    {name : "B"}
];
console.log(names[0]?.name); // Even for array we can use this method
