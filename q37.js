const user = {
    name: "Acharya",
    profile: {
        city: "Chennai"
    }
};
console.log(user?.profile?.city??"No city found");
const country = user?.profile?.country??"India";
console.log(country);