const students = [
    {
        name: "A",
        marks: 85,
        course: "CSE",
        skills: ["C", "Python"]
    },
    {
        name: "B",
        marks: 72,
        course: "CSE",
        skills: ["Java", "Python"]
    },
    {
        name: "C",
        marks: 91,
        course: "ECE",
        skills: ["C++", "Python", "MATLAB"]
    },
    {
        name: "D",
        marks: 64,
        course: "CSE",
        skills: ["C", "JavaScript"]
    },
    {
        name: "E",
        marks: 88,
        course: "CSE",
        skills: ["Python", "JavaScript"]
    }
];
const topStudents = students.filter(student => student.marks >= 80);
const topStudentsName = topStudents.map(student => student.name);
const CSE = topStudents.filter(student => student.course === "CSE");
const totalMarks = topStudents.reduce(
    (total, student) => total + student.marks,0);
const averageMarks = totalMarks / topStudents.length;
const firstTopCSE = CSE.find(student => student.marks >= 80);
const needStudent = students.find(student => student.name === "A");
const updatedStudent = {
    ...needStudent,
    marks: 95,
}
function getFirstSkill(skills) {
    skills = ["Python","C","C++"];
    const [first,...rest] = skills;
    console.log(first);
}
const collegeData = {
    location: {
        city: "Chennai"
    }
};
console.log(collegeData?.location?.city??"Unknown");
const cseNames = topStudents.filter(student => student.course === "CSE" && student.marks >= 80);

console.log(topStudents);
console.log(topStudentsName);
console.log(firstTopCSE);
console.log(updatedStudent);
console.log(totalMarks);
getFirstSkill();
console.log(cseNames);