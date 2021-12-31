// Default parameters
myapp =(a, b=9)=>{
    return a+b;
}

const result = myapp(3, 4);
// const result = myapp(3);
console.log(result);