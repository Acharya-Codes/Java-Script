const num = [1,2,3,4,5];
function reverseArray() {
    let result = [];
    for(let i = num.length-1; i >= 0; i--) {
        result.push(num[i]);
    }
    return result;
}
console.log(reverseArray(num));