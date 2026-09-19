const num = [5,6,8,9,3];
let evenc = 0;
let oddc = 0;
let zeros = 0;
function checkNum(num) {
    for(let i = 0; i < num.length; i++) {
        if(num[i] % 2 === 0) {
            evenc+=1;
        }else {
            oddc+=1;
        }
    }
    return {
        even: evenc,
        odd: oddc
    }
       
}
const result = checkNum(num);
console.log(result);