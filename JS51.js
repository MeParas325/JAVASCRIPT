const user1 = {
    firstName : "Tannu",
    age : 19,
    about : function(hobby, sub){
        console.log(this.firstName, this.age);
        console.log(`${this.firstName} fav subject is:${sub} and hobby is ${hobby}`);
    }
}

const user2 = {
    firstName : "Paras",
    age : 20,
}

// user1.about();
user1.about.call(user1, "Sleeping", "Pahaad");
user1.about.call(user2, "Coding", "Space");