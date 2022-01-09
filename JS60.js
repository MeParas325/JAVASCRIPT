function hello(){
    console.log("Hello gyus");
}

// const hello = {
//     key1 : "value1"
// }

// javascript function ===> function + object
console.log(hello.name);
hello.myOwnProperty = "Unique value";
console.log(hello.myOwnProperty);

//name property ===> tells the function name

// function provides some more useful properties

// function gives us a free space which is an object and it is also known as prototype
hello.prototype; //prototype is an empty object provide by an function
console.log(hello.prototype);

// only functions provides prototype prototype property

if(hello.prototype){
    console.log("Prototype is Present in this function");
}
else{
    console.log("Prototype is not present");
}

hello.prototype.abc = "Paras";
hello.prototype.abcd = function(){
    console.log("I am singing a song");
};
console.log(hello.prototype);
console.log(hello.prototype.abcd());
console.log(hello.prototype.abc);