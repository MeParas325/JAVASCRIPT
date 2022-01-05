const user1 = {
    firstName : "Tannu",
    age : 19,
    about : function(hobby, sub){
        console.log(this.firstName, this.age);
        console.log(this);
    }
}

// dont do this mistake
const myFunc = user1.about.bind(user1);
myFunc()