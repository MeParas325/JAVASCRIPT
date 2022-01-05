// Optional chaining
const user = {
    firstName : "Paras",
    // address : {houseNumber : "1234"}
}

console.log(user?.firstName);
console.log(user?.address?.houseNumber);