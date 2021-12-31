// function inside function
// myapp=()=>{
//     console.log("Inside myApp function");
// }
function myapp(){

    insideFunc =()=>{
        console.log("Inside inside Func");
    }

    const secondFunc=()=>{
        console.log("I am the function inside this app function");
    }

    const addNum = (num1, num2)=>num1 + num2;

    const mulNum = (num1, num2)=>{
        console.log("Returning the values of Multiplication");
        return num1*num2;
    }

    const subNum=(num1, num2)=>{
        console.log("Returning the Value after the subtraction");
        let newNum = num1-num2;
        return ("The return value is:"+newNum);

    }
    console.log("Inside myApp function yes");
    insideFunc();
    secondFunc();
    console.log(addNum(23, 45));
    console.log(mulNum(2, 3));
    console.log(subNum(4, 5));
}


myapp();