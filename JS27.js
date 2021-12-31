//Lexical scope
function myapp(){
    const var1 = "1";
    function myfunc(){
        const var1 = "34";
        const myfunc4 = () =>{
            console.log("Inside function", var1);
        }
        myfunc4();

    }
    const myFunc2=()=>{

    }
    const myFunc3 = function(){}
    console.log(var1);
    myfunc();
}
myapp();