function countDigits(n) {
    let count = 0;
    let num = n;
    while(num > 0) {
        num = Math.floor(num/10);
        count++
    }
    return count;
}
const result = countDigits();
console.log(result);