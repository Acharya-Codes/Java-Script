const num = [1,2,3,4,5];
const [first,...rest] = num;
console.log(first);
console.log(rest);
const [first,second,...remaining] = num;
console.log(first);
console.log(second);
console.log(remaining);