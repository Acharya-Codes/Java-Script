const age = 18;
const marks = 79;
const govtQuota = true;
const sportsQuota = false;
if(age >= 18 && marks >= 75 && (govtQuota || sportsQuota)) {
    console.log("Eligible");
}else {
    console.log("Not eligible");
}