const student = {
    name: "Acharya"
};
const city = student.city ?? "Unknown";
console.log(city);

const age = 0;
console.log(age || 18); // Basically or function, here since the age is 0 it will return 18
console.log(age ?? 18); // ?? treats undefined or null values important and gives them priority
