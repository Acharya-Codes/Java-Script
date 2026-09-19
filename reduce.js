const num = [1,2,3,4,5];
const result = num.reduce((total,n) => {
    return total + n;
}, 10);
console.log(result);