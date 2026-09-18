let n = 0;
function sumTo(n) {
    for(let i = 1; i <= n; i++) {
        return(n*(n+1))/2;
    }
}
const result = sumTo(5);
console.log(result);