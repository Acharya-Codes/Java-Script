const students = [
    { name: "A", marks: 65 },
    { name: "B", marks: 82 },
    { name: "C", marks: 91 },
    { name: "D", marks: 74 }
];
const updatedStudents = students.map(student => {
    return {
        name : student.name,
        marks : student.marks + 10,
    };
});
console.log(updatedStudents);