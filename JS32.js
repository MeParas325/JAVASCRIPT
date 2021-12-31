// param destructing

//Object
//react

const person = {
    firstName : "Paras",
    gender : "Male",
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.gende);
// }

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.gende);
// }
// printDetails(person);

function printDetails({firstName, gender}){
    console.log(firstName);
    console.log(gender);
}
printDetails(person);