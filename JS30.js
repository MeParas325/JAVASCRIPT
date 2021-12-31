// rest parameters
const myapp = (a, b, ...c) =>{
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    console.log("c is:"+c);
    console.log("c is:", c);
}

myapp(3, 54, 23, 56, 45, 66);