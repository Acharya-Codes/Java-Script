const student = {
    name : "Acharya",
    percentile : 98,
    age : 17
};
console.log(student.name);
student.city = "Cuddalore";
console.log(student);
// Now let's do some nested objects shall we :)
student.marks = {maths:92,physics:85,programming:95};
console.log(student.marks.maths);