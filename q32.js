const students = [
    { name: "A", marks: 65 },
    { name: "B", marks: 82 },
    { name: "C", marks: 91 },
    { name: "D", marks: 74 },
    { name: "E", marks: 88 }
];
console.log(students[2].name);
console.log(students[1].marks);
const result = students.filter(student => student.marks >= 80);
const res = result.map(student => student.name);
console.log(result);
console.log(res);