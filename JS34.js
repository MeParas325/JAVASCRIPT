// function returning function

// function myFunc(){
//     return {name : "Paras", age : "22"}
// }
function myFunc(){
    // function hello(){
    //     return "Hello World"
    // }
    return function hello(){
        return "Hello world"
    }
}

const ans = myFunc();
console.log(ans());