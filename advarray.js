//of :
const num = [10,20,30,40,50];
for(number of num) {
    console.log(number); // Can be used instead of indexing
}
// includes :
const fruits = ["Apple","Mango","Banana"];
console.log(fruits.includes("Mango"));
console.log(fruits.includes("Strawberry")); // Used to check if an array contains a specific element or not
//indexOf :
console.log(fruits.indexOf("Mango")); // Used to check the index of the element in that array
console.log(fruits.indexOf("Strawberry")); // If that element doesnt exist in that array, then it returns -1
//slice :
const result = num.slice(1,4) // New array created but in that start index value included but end index value not included
console.log(result); // Doesnt change original array
//splice :
num.splice(2,1); // Remove any element/s in the array (start,delete_count)
console.log(num); // Changes original array