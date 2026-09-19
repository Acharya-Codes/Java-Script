const num = [11,3,5,78,9,45];
//const result = num.map(n => n > 10);
//const res = result.filter(n => n*2);
//console.log(res);
// This wont work as it will return the truthy values instead of the actual values so the order of using map or filter matters!
const result = num.filter(n => n>10).map(n => n*2);
console.log(result);