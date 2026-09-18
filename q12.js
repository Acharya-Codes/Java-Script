const age = 19;
const idPass = true;
const idCard = false;
if(age > 18 && (idPass || idCard)) {
    console.log("You can enter here");
}else {
    console.log("You cannot enter here");
}