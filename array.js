const fruits = ["Apple","Banana","Orange"];
console.log(fruits.length); // To print the length of the array
fruits[1] = "Strawberry"; // To change an element from the array
// fruits = "Orange"; --> This wouldnt work as fruits is made with const so we cant change the entire array but we can change the elements!
fruits.push("Banana"); // To add an element to the array
const removed = fruits.pop() // Removes the last element
const numbers = [2,3,4];
numbers.unshift(1); // Adds element to the first
const remove = numbers.shift() // Removes from the begining

