function about(hobby, sub){
    console.log(this.firstName, this.age);
    console.log(`${this.firstName} fav subject is:${sub} and hobby is ${hobby}`);
}

const user1 = {
    firstName : "Tannu",
    age : 19,
}

const user2 = {
    firstName : "Paras",
    age : 20,
}
about.apply(user1, ["Sleeping", "Pahaad"]);
about.apply(user2, ["Coding", "Space"]);