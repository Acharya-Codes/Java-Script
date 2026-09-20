const student = {
    name: "Acharya",
    course: "CSE",
    marks: 85,
    city: "Chennai"
};
const {name,...rest} = student;
console.log(name);
console.log(rest);

const num = [1,2,3,4];
function multAll(...num)  {
    return num.reduce((mult,n) =>mult*n ,1);
}
console.log(multAll(2,3,4));