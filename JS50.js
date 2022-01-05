console.log(this);
console.log(this === window);

function myFunc(){
    console.log(this);
}
myFunc();