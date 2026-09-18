const n = 58321;
let count = 0;
let num = n;
while(num > 0) {
    num = Math.floor(num/10);
    count++;
}
console.log(count);