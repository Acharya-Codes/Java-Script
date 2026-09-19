const numbers = [2,56,71,4,3];
function findLargest(numbers) {
    let largest = numbers[0];
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > largest) {
        largest = numbers[i];
    }
    }
    return largest;
}
console.log(findLargest(numbers));