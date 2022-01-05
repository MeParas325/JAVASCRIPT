// const user = {
//     firstName : "Paras",
//     age : 2,
//     about : function(){
//          return `${this.firstName} age is ${this.age};`
//     },
//     is18: function(){
//         return `${this.age} >= 18`;
//     }
// }

function createUser(firstName, age){
    const user = {};
    user.firstName = firstName;
    user.age = age,
    user.about = function(){
        return `${this.firstName} age is ${this.age}`;
    }
    user.is18 = function(){
        return this.age >= 18;
    }

    return user;
}

const user1 = createUser("Paras", 3);
console.log(user1);
console.log(user1.is18());
console.log(user1.about());

