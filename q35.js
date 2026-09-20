const student = {
    name: "Acharya",
    course: "CSE",
    marks: 85
};
const skills = ["C", "Python"];
const updatedSkills = {
    ...student,
    skills: [...skills,"Javascript"]
}
console.log(skills);
console.log(updatedSkills);

const updatedStudent = {
    ...student,
    marks: 95,
}
console.log(updatedStudent);

const frontend = ["HTML","CSS"];
const backend = ["Python","FastAPI"];
const allSkills = {
    ...student,
    skill: [...frontend,...backend]
}
console.log(allSkills);