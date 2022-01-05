// Methods
// function inside object
function personInfo(){
    console.log(`Person information is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
    firstName : "Paras",
    age : 42,
    about : personInfo
}

const person2 = {
    firstName : "Par",
    age : 44,
    about : personInfo
}

const person3 = {
    firstName : "Para",
    age : 43,
    about : personInfo
}

person1.about();
person2.about();
person3.about();
