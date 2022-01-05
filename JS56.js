const user1 = {
    firstName : "Tannu",
    age : 19,
    about: ()=>{
        
        console.log(this.firstName, this.age);
    }
}

user1.about();