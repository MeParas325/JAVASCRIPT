/*****prompt*****/
let winningnumber = 9;
let userguess = +prompt("Guess the number:");
console.log(typeof userguess, userguess);

if(userguess == 9){
    console.log("Your guess is right");
}
else{
        if(userguess>winningnumber){
            console.log("too high!");
        }
        else{
            console.log("too low!");
        }
}