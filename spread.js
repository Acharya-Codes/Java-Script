const num = [10,20,30];
const num2 = [50,60,70];
const copy = [...num]; // Basically like copying an array and pasting it in a new empty array
copy.push(40);
console.log(copy);
const add = [...num,...num2]; // Basically we can add two spreads
console.log(add);