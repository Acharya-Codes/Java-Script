const students = [
    { name: "A", marks: 65 },
    { name: "B", marks: 82 },
    { name: "C", marks: 91 },
    { name: "D", marks: 74 },
    { name: "E", marks: 88 }
];
//const result = students
//    .filter(student => student.marks >= 80)
//    .map(student => student.name)
//    .find(student => student.marks > 90)
//    .reduce((total,students) => {
//        return total = total + students;
//    },0);
// This doesnt work becuase .map changes the element so we cannot always use this blockchain method so do it the normal way
const topStudents = students.filter(student => student.marks >= 80);
const names = topStudents.map(student => student.name);
const firstHighScorer = students.find(student => student.marks >= 90);
const totalMarks = topStudents.reduce((total, student) => {
    return total + student.marks;
}, 0);
console.log(topStudents);
console.log(names);
console.log(firstHighScorer);
console.log(totalMarks);